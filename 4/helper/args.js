const getArg = (arg) => {
    const [executer, file, ...rest] = arg;
    const res = {};
    rest.forEach((el, index, ar)=>{
        if(el.charAt(0) == '-'){
            if(index == ar.length - 1){
                res[el.substring(1)] = true; 
            } else if(ar[index + 1].charAt(0) !== '-'){
                res[el.substring(1)] = ar[index + 1];
            } else {
                res[el.substring(1)] = true;
            }
        }
    });
    return res;
}

export { getArg };

//substring() -
// charAt()