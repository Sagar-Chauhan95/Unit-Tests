// write any code you want to test here and run with npm run app
// import {makeArmy } from './closures.js';






// function call():()=>number{
//     return function(){
//         return 5;
//     }
// }

// console.log(call()());



// type Names = string[];
// const names = ['Fred smith','Carl lindstrom'];

// function firstLast(names:Names):{firstName:string, secondName:string}[]{
//     return names.map((name)=>{const [firstName,secondName]=name.split(" ");
//     return {firstName,secondName}});
// };

// console.log(firstLast(names));


// function replaceEnds(arr:number[],numA:number,numB:number):number[]{
//     let newArr:number[] = arr.slice();
//     newArr.splice(0,1,numA);
//     newArr.splice(4,5,numB);
//     return newArr;
    
// }

// const arr = [1,2,3,4,5];
// console.log(replaceEnds(arr,0,100));
// console.log(replaceEnds(arr,100,0));
// console.log(arr);



// function foo(operation:(a:number)=>number,num:number):number{
//     return operation(num);

// }
// function square(b:number):number{
//     return b*b;
// }
// function cube(b:number):number{
//     return b*b*b;
// }

// console.log(foo(square,5));
// console.log(foo(cube,10));


// const session1 = { userId: 1, duration: 60 };
//     const session2 = { userId: 2, duration: 45 };
//     const session3 = { userId: 2, duration: 30 };
//     const session4 = { userId: 3, duration: 15 };
//     const session5 = { userId: 3, duration: 75 };
//     const day1 = { sessions: [session1, session2], date: "01/10/2022" };
//     const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
//     const dailyRecord = [day1, day2];


//     type Session ={userId:number,duration:number};
//     type Day = {sessions:Session[]; date:string};
    

//     function dailyTotalDuration(sessions:Session[]):number{
//         let sum=0;
//         for(const session of sessions){
//             sum+=session.duration;
//         }
//         return sum;
//     }

//     function calculateTotalDuration(dailyRecord:Day[]):number{
//         let totalDuration=0;
//         for(const days of dailyRecord){
//             for(const session of days.sessions){
//                 totalDuration+=session.duration;
//             }
//         }return totalDuration;
//     }

//     function getAllSessions(dailyRecord:Day[]):Session[]{
//        let allSeason:Session[]=[];
//     for(const days of dailyRecord){
//         allSeason=allSeason.concat(days.sessions);
//     }
//     return allSeason;
 
//     }
//     function getAllSessionsForUser(dailyRecord:Day[],num:number):Session[]{
//         // let userSession:Session[]=[];
//         // for(const days of dailyRecord){
//         //    let result= days.sessions.filter((session)=>(session.userId===num));
//         //    userSession=userSession.concat(result);
//         // }
//         // return userSession;
//        return getAllSessions(dailyRecord).filter((session)=>session.userId==num);
//     }

//     function getAllDuration(dailyRecord:Day[]):number[]{
//     //     let allDuration:number[]=[];
//     //     for(const days of dailyRecord){
//     //         let result = days.sessions.map((session)=>session.duration)
//     //         allDuration=allDuration.concat(result);
//     //     }
//     //     return allDuration;
//     return getAllSessions(dailyRecord).map((session)=>session.duration);
//     }
//     // }




//     console.log(dailyTotalDuration(day2.sessions));
//     //120
//     console.log(calculateTotalDuration(dailyRecord));
//     //225
//     console.log(getAllSessions(dailyRecord));


//     console.log(getAllSessionsForUser(dailyRecord,2));
//     console.log(getAllDuration(dailyRecord));


    
