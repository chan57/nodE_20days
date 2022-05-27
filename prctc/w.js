// const { Worker } = require('worker_threads');
// const { performance, PerformanceObserver } = require('perf_hooks');

// const performanceObserberr = new PerformanceObserver((items)=>{
//     items.getEntries().forEach((it)=>{
//         console.log(`${it.duration} - ${it.entryType}`);
//     });
// })

// performanceObserberr.observe({ entryTypes:'' });

// const workFunc = (number, strNumb) =>{
//     return new Promise((resolve, reject)=>{
//         const worker = new Worker('./3.js',{
//             workerData:{
//                 number,strNumb
//             }
//         })
//         worker.on('message', (ms)=> resolve(ms));
//         worker.on('error', (er)=> reject(er));

//     })
// }

// const mainFunc = () =>{
//     performance.mark('start');
//     let result = workFunc(5, 'one');
//     console.log(result);
//     performance.mark('emd');
//     // performance.measure()
// }

// // const startMainFunc = setTimeout(()=> mainFunc(),3000);
// // startMainFunc.unref();

// // if(){
// //     startMainFunc.ref();
// // }


// // timer +, observ+, then