const {parentPort, workerData} = require('worker_threads');

const resultEr= ({ it }) =>{
    let d = 0,s = 0;
    for(; d<1000000;d++){
        s++;
    }
    console.log(s);
}

parentPort.postMessage(resultEr(workerData));