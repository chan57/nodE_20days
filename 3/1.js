const { Worker} = require('worker_threads');

function enemY(f_number, s_number){
    return new Promise((resolve,reject)=>{
        const worker = new Worker('./2.js',{
            workerData:{
                f_number, s_number
            }
        });
        worker.on('message',(mes) => resolve(mes));
        worker.on('error', (er) => reject(er));
        worker.on('exit',() => console.log('exit'));
    });
}

   
function enemX(f_number, s_number){
    return new Promise((resolve,reject)=>{
        const worker2 = new Worker('./2.js',{
            workerData:{
                f_number, s_number
            }
        });
        worker2.on('message',(mes) => resolve(mes));
        worker2.on('error',(er) => reject(er));
        worker2.on('exit', () => console.log('exit2'));
    })
}



async function glob(){
    console.log('start glob func');
    const res = await Promise.all([enemY(18,4),enemX(34,5)]);
    console.log(res);
    console.log('end');
}

glob();