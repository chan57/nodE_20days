const EventEmiter = require('events');

const firstEmiter = new EventEmiter();

const simDB= () =>{
        console.log('da');

}

firstEmiter.addListener('firstlistener0', simDB);
firstEmiter.emit('firstlistener0');
firstEmiter.removeListener('firstlistener0', simDB);
firstEmiter.emit('firstlistener0')//no

firstEmiter.once("once", ()=>{
    console.log('onse');
});

firstEmiter.emit('once');

firstEmiter.addListener('calBack', (numb)=>{
    for( ; numb<10; numb++){
        console.log(numb)
    }
});

firstEmiter.emit('calBack', 4);


//---