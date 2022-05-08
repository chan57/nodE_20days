// модуль повторное использование, изоляция, удобство, организация

/*
comon js   |     es module



*/

let  a = 'sas';

function Manager(some){
    if(some == 'sas') console.log('dunger!');
}

module.exports = {a, Manager};