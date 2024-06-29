/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/

export function copyArray<T>(arr: T[]): T[] {
    // COMPLETE THIS
    let newArr:T[]=structuredClone(arr);
    return newArr;
    

}

export function concat(arr1:number[],arr2:number[]):number[]{
    return [...arr1,...arr2];
}

export function findMin(...arr1:number[]):number{
    return Math.min(...arr1);
}



export function findProduct(...arr:number[]):number{
    let product=1;
    for(const number of arr){
        product*=number;
    }
    return product;

}