const {parentPort, workerData} = require('worker_threads');

const resultEr= (it) =>{
    const b =  1;
    for( ; it<999999; it++){
       b += it;
    }
    return b;
}

parentPort.postMessage(resultEr(workerData));