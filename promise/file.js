const pro = new Promise(function(resolve,reject){

    if(true) setTimeout(()=> resolve('ok'),2000);
  else setTimeout(() => reject(new Error('ero4')),2000);

}) 
    pro.finally(console.log('finaly'));
    pro.then(
        function(result){console.log(result)},
        function(error){console.log(error)}
    );
    pro.then(()=>console.log('22'))