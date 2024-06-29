

export function firstLast(names:string[]):{firstName:string;lastName:string}[]{

    return names.map((item:string)=>{const[firstName,lastName]=item.split(" ");
    return {firstName,lastName};
    });
};


export function replaceEnds(arr:number[],numA:number,numB:number,numC:number,numD:number):number[]{
    let newArr:number[]=arr.slice();
    newArr.splice(0,2,numA,numB)
    newArr.splice(3,6,numC,numD);
    return newArr;``
};

export function higho(operation:(num:number)=>number,arr:number[]):number[]{
    return arr.map(operation);
}
export function square(num:number):number{
   return num*num;
};
export function absVal(num:number):number{
    return Math.abs(num);
}




// const add = (num1, num2) => {
//     return num1 + num2
//   }
  
//   const subtract = (num1, num2) => {
//     return num1 - num2
//   }
  
//   const compute = (operation, num1, num2) => {
//     return operation(num1, num2)
//   }
  
//   compute(add, 5, 2) //=> returns 7
//   compute(subtract, 5, 2) //=> returns 3


// type session= {userId:number; duration:number};
//  type day = {sessions: session[]; date:string};
//  type Record = day[];

export function calculateDailyTotalDuration(sessions:any[]):number{
        let sum:number=0;
        for(let session of sessions){
            sum+=session.duration;
        }
        return sum;
}


export function calculateTotalDuration(dailyRecord:any[]):number{
    let totalSum=0;
    for(let days of dailyRecord){
        for(let episode of days.sessions){
            totalSum+=episode.duration;

        }
    }return totalSum;
}

export function getAllSessions(dailyRecord:any[]):any[]{
    let resultArr:any[]=[];
   for(let days of dailyRecord){
    resultArr=resultArr.concat(days.sessions)
        
    }
 return resultArr;
    

}
