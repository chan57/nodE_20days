#! /usr/bin/env node 
import { printEr, printHelp, printSucc } from "./services/log.services.js"; 
import { getArg } from "./helper/args.js";

const main = () =>{

    const result = getArg(process.argv)
    // console.log(result)
    if(result.h){
        printHelp();
    }
    if(result.t){

    }
    if(result.s){

    }
    if(result.p){

    }
    // vivesti default
}

main();