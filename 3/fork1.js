process.on('message', (number)=>{
    if(number){
    console.log(number)
    process.send('noonon')
    }
    process.disconnect();
})