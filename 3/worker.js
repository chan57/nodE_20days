const {parentPort, workerData} = require('worker_threads');

const resultEr= ({ it }) =>{
    let b =  1;
    b += Number(it);
    return b;
}

parentPort.postMessage(resultEr(workerData));