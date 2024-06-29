// let x:number = 10;
// // console.log(x.toString());
// console.log(typeof(x.toString()));
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];
// // write a function, averagePoints, to get an array containing the average points across for each player .
// // Try with a regular for..of loop and then using map.
// // console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// //console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players));
function averagePoints(players) {
    let averagePointArray = [];
    for (const player of players) {
        let sum = 0;
        let average = 0;
        let playerDetails = {};
        for (const points of player.points) {
            sum += points;
        }
        average = sum / player.points.length;
        playerDetails[player.name] = average;
    }
    return averagePointArray;
}
function averageDetailPoints(players) {
    let resultArr = [{}];
    for (let i = 0; i < players.length; i++) {
        let sum = 0;
        for (let j = 0; j < players[i].points; j++) {
            sum += players[i].points[j];
        }
    }
}
function averageReducePoints(players) {
    let resultArray = [];
    for (const player of players) {
        let sumPoints = player.points.reduce((sum, current) => sum + current);
        resultArray.push(sumPoints);
    }
    return resultArray.reduce((sum, current) => sum + current);
}
console.log(averagePoints(players));
console.log(averageReducePoints(players));
export {};
// const array123 = [1, 2, 3]
// // use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9]
// let square=array123.map(element=>element*element);
// console.log(square);
// function runShow(str:string, yes:()=>void, no:()=>void){
//     if(prompt(str)==='yes'){
//         yes();
//     }else{
//         no();
//     }
// }
// function show():void{
//     console.log("Correct");
// }
// // const show =():void=>{
// //     console.log()
// // }
// console.log(runShow('Do you agree?',show,notShow))
// let call ={name:'sagar', id:12, points:[1,2,3,4]};
// call.points.forEach(function(num:number):number{
//     return num*num;
// })
// console.log(call.points);
// let array =[1,2,3,4];
// let y=array.forEach(function(num:number):number{
//     return num*num;
// });
// console.log(y);
//Use of concat to join strings
// let x= 'sAGAR';
// let y ='chauhan';
// console.log(x.concat(" ",y));
// let arr1 =[1,2,3];
// let arr2 =[4,5];
// let x= arr1.concat(arr2);
// console.log(x);
// console.log(x.splice(0,1));
// console.log(x);
//use of forEach in array
// let array =[1,2,3];
// array.forEach(function(num:number):void{
//     let y=num*num;
//     console.log(y);
// });
// function sayHi(): void {
//     console.log( "Hello" );
//     }
//     const myHi = sayHi();
//     // console.log( sayHi() );
//     // function higherOrder():void { return sayHi(); }
//     // higherOrder();
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//   ];
//   let x:any = users.find(item=>item.name==='John');
//   console.log(x.id);
// let array =[1,2,3,4];
// let x = array.find(item=>item%2==0);
// let y = array.findIndex(item=>item%2===0);
// let z=array.filter(item=>item%2==0);
// let k =array.map(x=> x*x);
// console.log(k);
// console.log(z);
// console.log(y);
// console.log(x);
// 
// let data={id:1,name:"john", roll:function(){return this.name}};
// console.log(data.roll())
// const loggedInUsername = "Sam";
// const users = [
//  { name: "Oby", age: 12 },
//  { name: "Heera", age: 32 },
// ];
// const loggedInUser = users.find((u) => u.name === loggedInUsername);
// console.log(loggedInUser.age);
// console.log(typeof(undefined));
// function callBack(str:string){
//     if(str===null&& str===undefined){
//         return 'good';
//     }else{return 'bad';}
// }
// console.log(callBack('call'));
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log (`${item} is at index ${index} in ${array}`);
//    });
// function filterRange(arr:number[],num1:number,num2:number):number[]{
//     let x= arr.filter(x=>(x>=num1 && x<=num2));
//     return x;
// }
// console.log(filterRange([1,2,4,5,7],2,5));
// let name=[{roll:1},{roll:3}];
// let x=name.map(item=>{roll:'call'})
// console.log(x);
