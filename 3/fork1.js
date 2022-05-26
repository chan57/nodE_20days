process.on('message', (number)=>{
    let d = 0,s = 0;
    for(; d<100000;d++){
        s++;
    }
        process.send(s)
        process.disconnect()
        
})