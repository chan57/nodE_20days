const {performance} = require('perf_hooks');
console.log(performance.now());

function louwMas(a){
    performance.mark('nachalo');
    let b = 0;
    while(a<1000){
        b+=a*a;
        a++;
    }
    performance.mark('end');
    performance.measure('uauae', 'nachalo', 'end');
    // console.log(performance.getEntriesByName('uauae'));

    
}

louwMas(10);

//5.40