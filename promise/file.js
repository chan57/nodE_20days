// const pro = new Promise(function(resolve,reject){

//     if(true) setTimeout(()=> resolve('ok'),2000);
//   else setTimeout(() => reject(new Error('ero4')),2000);

// }) 
//     pro.finally(console.log('finaly'));
//     pro.then(
//         function(result){console.log(result)},
//         function(error){console.log(error)}
//     );
//     pro.then(()=>console.log('22'))


let a = 23;


class Victor {
  constructor(bool,number){
    this.bool = bool;
    this.number = number;
  }
  off(er){
    new Promise((resolve,reject) =>{

      if(this.bool){
      setTimeout(() => resolve(this.number), 2000)
      } else {
        setTimeout(() => reject(new Error(er)), 2000)
      }
    })
    .catch((pomilka) => pomilka)
    .finally(() => (console.log("finale")))
    .then((result) =>{
    console.log(result);
    return result+2;
  })
    .then((result) => console.log(result+2));
  }
}


const trip = new  Victor(false, 2);
trip.off('errrerere');
