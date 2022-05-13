let a = 2, r = 0;
async function aw(){
    let prom = new Promise((resolve, reject) =>{
        setTimeout(()=>resolve(a), 2000);
        // setTimeout(() =>reject(new Error('new ER')), 2000);
    })
    // let resulter = await prom;
    let w = await prom;
    console.log(1+1)
     console.log(w);
    // console.log(resulter);
}
    

    aw().then();

// (async () => {
//     let rest = await fetch('/article/promise-chaining/user.json');
// })

async function g(){
    throw new Error('asaa') 
}