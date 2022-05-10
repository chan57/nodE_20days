// class Title {
//     constructor(a,n){
//         this.a = a;
//         this.n = n; 
//     }
//     arr = [1,2,3,4,5];
//     static remove(b){
//         return b+1;
        
//     }
// }
// const fTitle = new Title(2,3);
// fTitle.arr.forEach(element => {
//     Title.remove(element);
// }); 
// console.log(fTitle.arr)


// class Water {
//     constructor(a){
//         this._a = a;
//     }
//     setlvlWater(value){
//         if(value<10) throw new Error("<1=0");
//         this._a=+value;
//     }

//     getLvlWater(){
//         return this._a;
//     }
// }

// const dW = new Water(1);
// console.log(dW.setlvlWater(13))


// const  sayS = {
//     speak(word){
//         console.log('d' + word)
//     }
// };

// // let getSayS = Object.create(sayS);

// let getSayS = {
//     __proto__:sayS,
//     creap() {
//         super.speak(this.name);
//     }
// }
// class User {
//     constructor(name){
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, getSayS);

// new User('colya').creap();


const r = new Error('messege error');
try{
    console.log('try');
    lalla;
} catch {
    console.log(r.message);
    console.log(r.stack);
    
}finally{
    console.log('finalle');
}