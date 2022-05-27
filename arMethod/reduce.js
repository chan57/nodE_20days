//перебирает елементы передавая возвр. знач. ел. из предущего элемента

const ar = [1,2,3,4,5];

const res = ar.reduce((previouEL, nowEL)=>{
    return previouEL - nowEL;
})

console.log(res);