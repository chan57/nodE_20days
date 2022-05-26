const { fork } = require('child_process');
const { Worker } = require('worker_threads');
const { performance, PerformanceObserver } = require('perf_hooks'); 

const performanceObserve = new PerformanceObserver((items) =>{
    items.getEntries().forEach(element => {
        console.log(`${element.name} : ${element.duration}`);
    });
})

performanceObserve.observe({ entryTypes: ['measure']});

const workerFunction = (array) =>{
    return new Promise((resolve, reject)=>{
        performance.mark('st_fork');
        const worker = new Worker('./worker.js', {
            
            workerData:{
                array
            }
        });

        worker.on('message',(msg) => resolve(msg));
        worker.on('error',(er) => reject(er));
        performance.mark('end_fork');
        performance.measure('fork','st_fork','end_fork');

        
    })
}

const forkProcess = fork('fork1.js')

const forkFunction = (array) => {
    
    forkProcess.send(array);
    return new Promise((resolve,reject) =>{
        performance.mark('st_worker');
        forkProcess.on('message', (ms)=>resolve(ms));
        
        performance.mark('end_worker');
        forkProcess.on('error', (er)=>reject(er));
        performance.measure('worker','st_worker','end_worker');
        
    })
}

const main = async () =>{
   
    await forkFunction([23,4,13]);

    await workerFunction([23,5,1]);

}

main();