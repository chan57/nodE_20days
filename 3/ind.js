const { rejects } = require("assert");
const { resolve } = require("path");
const { Worker } = require('worker_threads');

const resultEr=(it)=>{
    return new Promise((resolve, reject)=>{
        const worker = new Worker('./worker.js', {
                workerData:{
                    it
                }
        });

        worker.on('message', (ms)=>{
            resolve(ms);
        });

        worker.on('error',er=>{
            reject(er);
        });

        worker.on('exit',()=>{
            console.log('zavershil raboty');
        });
    });
}

    const main = async()=>{
    try{
        performance.mark('st');
        const result = await Promise.all([
        resultEr(9),
        resultEr(4),
        resultEr(3),
        resultEr(2),
    ]);
    console.log(result);
    performance.mark('en');
    performance.measure('maim','st','en');
    console.log(performance.getEntriesByName('main').pop());

    } catch(e){
        console.log(e)
    }
    
}

main();