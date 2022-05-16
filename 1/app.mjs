// import stil, {arr as Ar1, obj} from './ap.mjs';
async function te(){
    try{
        const {arr, obj} = await import('./ap.mjs')  
        for(let q = 0; q < 3; q++){
            obj.getName(arr[q]);
        }
    } catch {
        console.log('error')
    } finally {
        console.log('finalyty');
    }
    
}

te();