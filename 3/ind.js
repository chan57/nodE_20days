
const { Worker } = require('worker_threads');

const resultEr=(it,)=>{
    return new Promise((resolve, reject)=>{
        const worker = new Worker('./worker.js', {
                workerData:{
                    it
                }
        });

        worker.on('message', (ms)=>{
            console.log(worker.threadId);   
            resolve(ms);
        });

        worker.on('error',(er)=>{
            reject(er);
        });

        worker.on('exit',()=>{
            console.log('zavershil raboty');
        });
    });
}

    const main = async()=>{

        performance.mark('start');
        const result = await Promise.all([
        resultEr(9),
        resultEr(4),
        resultEr(3),
        resultEr(2),
    ]);
    console.log(result);
    performance.mark('en');
    performance.measure('main','start','en');
    console.log(performance.getEntriesByName('main').pop());
    
}

main();

