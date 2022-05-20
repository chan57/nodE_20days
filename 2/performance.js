
const perf_hooks = require('perf_hooks');


// const performanceObserver = new perf_hooks.PerformanceObserver((items, observer)=>{
//     console.log(items.getEntries());
//     const element = items.getEntriesByName('louwMas').pop();
//     console.log(`${element}`);
//     // observer.disconnected();    

// })

// performanceObserver.observe({entryTypes: ['measure']});

let gEtName=(it)=>{
    performance.mark('start');
    for(; it<100000; it++){
        let r =0;
    }
    performance.mark('e');
    performance.measure('found','start','e');
    console.log(performance.now());
    console.log(performance.getEntriesByName('found'));

}

gEtName(9);
