//тру только если все удовл. колбеку

function isBiger(el, ind, ar){
    return el*2>10
}

console.log([4,5,6,7].every(isBiger));