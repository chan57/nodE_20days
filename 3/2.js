const {workerData, parentPort} = require('worker_threads');

function enemY( {f_number,s_number}){
    return Number(f_number)+100 + Number(s_number)+100;
}
function enemX({f_number,s_number}){
    return Number(f_number)+1000+Number(s_number);
}

parentPort.postMessage(enemY(workerData));
parentPort.postMessage(enemX(workerData));