//если какой либо удволетворяет услов колбек-а то = тру

function isBiger(element,index,array){
    return element*2>10;
}

console.log([1,2,3,4,6].some(isBiger))