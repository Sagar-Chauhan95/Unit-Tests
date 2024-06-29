// function factorial(n:number):number{
//     if(n==1){
//         return 1;
//     }else{
//         return n*factorial(n-1);
//     }
// }
export {};
// console.log(factorial(5));
// function findLength(str:string):number{
//     if(str==""){
//         return 0;
//     }else{
//         // return 1 +findLength(str.slice(1))
//         return 1 + findLength(str.substring(1));
//     }
// }
// console.log(findLength("hello"));
// function countLetter(str:string,text:string):number{
//     if(str===""){
//         return 0 
//     }else if(str[0]===text) {
//         return 1 + countLetter(str.slice(1),text);
//     }else {
//         return countLetter(str.slice(1),text);
//     }
// }
// console.log(countLetter("All that is great and good.", "t"));
// let array =[1,2,3,4,5,6];
// // let result = array.filter(function(value){return value>4});
// function evenNumber(num:number){
//     return num%2==0;
// }
// let result = array.filter(evenNumber)
// console.log(result);
// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
//   ];
//   let result = arr.filter((value)=>(value.id!==0 && (Number.isFinite(value.id))));
//   console.log(result);
// let array =[1,2,3,4,2];
// // let result = array.flatMap((value)=>value==2?[2,3]:2);
// // console.log(result);
// array.forEach((item)=>{
//     if(item%2==0){
// }});
// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
//   const result = kvArray.map(({key,value})=>({[key]:value}));
//   console.log(result);
// function sumTo(num:number):number{
//   if(num===1){
//       return 1
//   }else{
//       return num +sumTo(num-1);
//   }
// }
// console.log(sumTo(5));
// type Sales = {name:string; salary:number}[];
// type Development = {sites:Sales; internals:Sales};
// type Company = {sales:Sales; sevelopment:Development};
// let company = { // the same object, compressed for brevity
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };
// function salaryCalculation(department:Company|Sales[]):number{
//   if(Array.isArray(department)){
//     return department.reduce((sum,current)=>sum+current.salary,0);
//   }else{
//     let sum:number =0;
//     for( let depart of Object.values(department)){
//       sum+=salaryCalculation(depart);
//     }
//     return sum;
//   }
// }
// console.log(salaryCalculation(company));
// function fibonacci(n:number):number{
//   if(n<=1){
//       return n;
//   }else {
//       return  n+fibonacci(n-1)+fibonacci(n-2);
//   }
// }
// console.log(fibonacci(5));
// type Name = {name:string; age:number};
// let array =[{name:'john', age:12},{name:"kly",age:11}];
// let nameObject = {};
// for(const names of array){
//   for(let keys in nameObject){
//     keys=names.name;
//     keys:names;
//   }
// }
// console.log(nameObject);
// function evenRecurse(num:number):number|undefined{
//     if (num<=0){
//         return 0;
//     }
//     if(num%2===0){
//         console.log(num-2,",");
//         return evenRecurse(num-1);
//     }
// }
// console.log(evenRecurse(7));
// Try with a regular for..of loop and then using map and reduce.
// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// // console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePointsLabeled (players));
// type Player= {name:string;points:number[] };
// function averagePoints(players:Player[]):number[]{
//     return players.map((player)=>{ const playerPoint = player.points;
//         let sum =0;
//         for(const playerPt of playerPoint){
//             sum+=playerPt
//         }
//         return sum/playerPoint.length
//     });
// }
// function averagePointsLabeled(players:Player[]){
//     return players.reduce((sum,player)=>
//     sum[player.name]:player )
// }
// function makeWorker()
// { let name:string = "Pete";
//     return function() { alert(name); };
// }
// let name:string = "John";
// // create a function
// let work = makeWorker();
// // call it
// work(); // what will it show?
// type List = {value:number; next:{}};
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// }
// function  outputList(list:List){
//     if()
// }
