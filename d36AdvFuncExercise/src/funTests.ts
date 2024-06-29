
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */

// import { createSecureContext } from "tls";



type mapFunc<T,U>= (currentValue:T, index?:number, arr?:T[])=>U;
export function myMap<T,U>(arr:T[],func:mapFunc<T,U>):U[]{
    const newArr:U[]=[];
    for(const currentValue of arr){
        newArr.push(func(currentValue,arr.indexOf(currentValue),arr));
    }
    return newArr;
}
// export function myMap(arr:number[], func:(a:number)=>number):number[]{
//     return arr.map(func);

//     //IMPLEMENTATION NEEDED
//     }

// export function double(num:number):number{
//         return 2*num;
//     }

//     export function cube(num:number):number{
//         return num*num*num;
//     }
// double;
// cube;
    
    /**
     * 
     * @param {*} arr 
     * @param {*} func 
     * @returns 
     */

    type filteredFunc<T>=(currentValue:T,index?:number, arr?:T[])=>boolean;
    export function myFilter<T>(arr:T[], func:filteredFunc<T> ):T[]{
        let newArr:T[]=[];
        for(const currentValue of arr){
            if(func(currentValue,arr.indexOf(currentValue),arr)){
                newArr.push(currentValue);
            }
        }
        return newArr;

    }



    // export function myFilter(arr:number[], func:(num:number)=>boolean):number[] {
    // //IMPLEMENTATION NEEDED
    // return arr.filter(func)
    // }
    
    // export function even(num:number):boolean{
    //    return num%2==0;
    // }
    // export function greater1(num:number):boolean{
    //    return num>1;
    // }
    


    // even
    /**
     * 
     * @param {*} arr 
     * @param {*} func 
     * @param {*} initialValue 
     * @returns 
     */

    type reduceFunc<T,U>=(acc:U, currentValue:T, currentIndex:number, array:T[])=>U;
    export function myReduce<T,U>(arr:T[],func:reduceFunc<T,U>,initialValue:U):U{
        let acc:U=initialValue;
        for(const currentValue of arr){
            acc=func(acc,currentValue,arr.indexOf(currentValue),arr);
        }
        return acc;


    }
    // export function myReduce(arr:number[], func:(acc:number,current:number )=>number, initial:number):number{
    //     //IMPLEMENTATION NEEDED
        
    //     return  arr.reduce(func,initial);
    //     }

    //     export function sum(acc:number,current:number):number{
           
    //         return acc+current;
         
    //     }

    //     export function mult(acc:number, current:number):number{
        
    //        return acc*current;
    //     }