const { fork } = require('child_process');

const forkProc = fork('fork1.js');

forkProc.on('message', (ms)=>console.log(ms));

forkProc.on('close', (ms)=>console.log("close: "+ms));

forkProc.send(56)