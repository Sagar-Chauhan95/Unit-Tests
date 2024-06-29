

/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/

export function filterRange(arr: number[],a: number, b: number): number[] {
    let newArr = arr.slice();
   
    return newArr.filter((numbers)=>(numbers>=a && numbers<=b));
    
}

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr: number[], a: number, b: number): void{
//    return  arr.filter((number)=>(number>=a && number<=b));
   arr.splice(0, arr.length, ...arr.filter(item => (a <= item) && (item <= b)));
    

}

type Calculator = {
    methods: { [key: string]: (a: number, b: number) => number };
    calculate: (str: string) => number;
    addMethod: (name: string, func: (a: number, b: number) => number) => void;
}
export const calculator:Calculator={
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
       
       
    },

    calculate: function (str:string):number{

        let [numA,operator,numB]=str.split(" ");
        // use of destructure to allocate strings to element of array;
         let a = parseFloat(numA);
         let b=parseFloat(numB);

         if(!(calculator.methods[operator] || isNaN(a) || isNaN(b))){
            console.log("invalid input");
         }

         const operation = this.methods[operator];
         return operation(a,b);
    },

    addMethod :function(str:string, calculatorFunction:(a:number,b:number)=>number):void{
        this.methods[str]=calculatorFunction;
    }
}



export function unique(arr: string[]): string[] {
    return arr.filter((item,index)=>arr.indexOf(item)===index);
    
}

export type User ={
    id: string;
    name: string;
    age: number;
}

export function groupById(users: User[]): { [key: string]: User } {
    // declare usersById to be an object with string keys and User values
    const usersById: { [key: string]: User } = {};  
    // FURTHER IMPLEMENTATION REQUIRED HERE
   return users.reduce((user,current)=>{
    user[current.id]=current;
    return user;
   },usersById);

}

type SurnameUser = {
    name: string;
    surname: string;
    id: number;
}

type FullNameUser = {
    fullName: string;
    id: number;
}   


export function map2fullName(users: SurnameUser[]): FullNameUser[] {
    // let result: { fullName: string, id: number }[] = [];
    // FURTHER IMPLEMENTATION REQUIRED HERE
    return users.map((user)=>({fullName:`${user.name} ${user.surname}`,id :user.id}));
}


export function sortByAge(users: User[]  ): void {
    // FURTHER IMPLEMENTATION REQUIRED HERE
    let sortedResult= users.sort((a,b)=>(a.age-b.age));
    console.log(sortedResult);
  }

export function findOldest(users: User[]): User {
    let oldest = users[0];
    // FURTHER IMPLEMENTATION REQUIRED HERE
    for(const user of users){
        if(user.age>oldest.age){
            oldest=user;
        }
    }return oldest;
  
}

/* getAverageAge using reduce */
export function getAverageAge(users: User[]): number {
    let sumAge = users.reduce((sum,current)=>sum+current.age,0);
    return  sumAge/users.length;
}