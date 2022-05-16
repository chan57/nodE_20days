// setTimeout(()=>console.log('a'),1000);

// const func = arg => console.log(arg);

// setTimeout(func, 2000, 225);



// const igor = setTimeout(()=>console.log('bo3'),2000);

// setTimeout(()=>{
//     clearTimeout(igor);
//     console.log('delete igor')
// }, 1000)

// const igorr = setInterval(()=>console.log('ss'),1000);

// setTimeout(()=>{
//     clearTimeout(igorr);
//     console.log('stop igorr')
// }, 4000)


console.log('start');

setImmediate(()=>console.log('posle vsego'));



const valera = setTimeout(()=>{
    console.log('fefeeef')
}, 4000);

valera.unref();

setTimeout(()=>{
    valera.ref();
}, 1000);