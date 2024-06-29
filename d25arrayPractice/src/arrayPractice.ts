
export type Person = {
    name: string,
    age: number
}

export function doubleNums(arr:number[]):number[]{
return arr.map(num => num * 2);
}

export function doubleAges(arr:{name:string,age:number}[]):{name:string,age:number}[]{
   return  arr.map((user)=>{
    return {name:user.name,
        age:user.age*2}});
}

export function filterEven(arr:number[]):number[]{
   return arr.filter(item=>item%2===0);

}

export function filterOver10(arr:{name:string, age:number}[]):{name:string, age:number}[]{
    return arr.filter((item)=>item.age>10);

}

export function findEvenNum(arr:number[]):(number|undefined){
    return arr.find((item)=>item%2===0);
}

export function findEvenAge(arr:{name:string; age:number}[]):{name:string; age:number}|undefined{
    return arr.find((item)=>item.age%2===0);


}

export function includesEvenNum(arr:number[],num:number):boolean{
     if(arr.includes(num)){
        return true;
     }
     return false;

}

// export function includesEvenAge(arr){

// }



