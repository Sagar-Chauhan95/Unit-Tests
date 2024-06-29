

// let x:number = 10;
// // console.log(x.toString());
// console.log(typeof(x.toString()));

// import { appendFile } from "fs";

// let x = 2/3;


// const sentence = 'Slice is cool!';

// for(let i=0; i<sentence.length; i++){
   
//     console.log(sentence.slice(i).trim());
// }


// let array:number[] = [1,2,3,4,6];
// array.forEach(function(num:number):number[]{
//     let resultArray:number[] = [];
//     if(num%2==0){
//         resultArray.push(num)
//     }
//     return resultArray;
    
// });
// console.log(array);

// const arr = [1,2,3,4,5];
// arr.splice(1,3, 999);
// console.log(arr);
// arr.splice(1, 1234);
// console.log(arr);


// function replacementInterrior (arr:number[], num:number):number[]{
//      arr.splice(1,arr.length-2,num);
//      return arr;
// }
// console.log(replacementInterrior(arr,999));


// const numbers = [1,5,18,2,77,108];
 

// console.log(numbers.find(num=>num%2===0));  //finds the first element which satisfy the condition 
// console.log(numbers.filter(num=>num%2===0)); // filters all the element which satisfy the condition
// console.log(numbers.findIndex(num=>num%2===0));  // finds the index of first element which satisfy te condition 


// interface student{name:string, class:string,roll?:number,age?:number, date?:number[],friends?:{add:string|number,height?:number}};

// const stud:student={name:"david",class:"vi",roll:15,};

// delete stud.roll
// console.log(stud);
// stud.age=55;
// console.log(stud);
// stud.date=[2,4,5,6];
// console.log(stud);
// let dateList = stud.date;
// let sum =0;
// for(const date of dateList){
//     sum+=date;
// }
// console.log(sum);
// stud.friends = {add:'home'};
// console.log(stud);
// stud.friends.add=5;
// console.log(stud);
// stud.friends.height=17;
// if(stud.friends.height===sum){
//     console.log("This is called luck");
// }


// let library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];


//     for (let books of library){
//         if(books.readingStatus){
//             console.log("Already read" + " "+ books.title);
//         }else{
//             console.log("Not read"+ " " + books.title);
//         }
//     }


// //Way to convert string to number ( two argument : first is number and second is base system)
// let text:string ='42.34abc'
// let integer:number = parseInt(text,10);
// let integer1 : number = parseFloat(text);
// console.log(integer);
// console.log(integer1);
// console.log(integer1.toFixed(1));
// console.log(Number('46'));
// console.log(typeof(+"45"));  // alias unary + way to make number

// Ways to convert number to string
// const x:number =45;
// console.log(typeof(""+x));
// console.log(typeof(x.toString()));
// console.log(typeof(105..toString()));

// Use of backtick (``)(`sum of num = ${sum(2,3)}`)
// function add(num1:number, num2:number):number{
//     return num1+num2;
// }

// console.log(`sum of 1 +2 = ${add(3,4)}`);

//finding index of string
// function computeIndexof(sentence:string, text:string):number{
//     return sentence.indexOf(text);
// }
// console.log(`index of is : ${computeIndexof("there is the call","is")}`)
// console.log(`index of the : ${computeIndexof("there is the call","here")}`)
// console.log(`index of the : ${computeIndexof("there is the call","it")}`)

//finding whether the sentence includes the word or not (using includes())

// function isIncluded(sentence:string, word:string):boolean{
//     return sentence.includes(word);
// }

// console.log(`is car included: ${isIncluded("there is a car","car")}`)
// console.log(`is car included: ${isIncluded("there is a car","van")}`);

// // to check whether the sentence starts with mentioned word or nor ( using startWith())
// function isStartedWith(sentence:string, word:string):boolean{
//     return sentence.startsWith(word);
// }
// console.log(`is sentence started with word car: ${isStartedWith("there is a car","car")}`)
// console.log(`is sentence started with word car: ${isStartedWith("there is a car","there")}`)


// to check whether the sentence is ended with mentioned word or not (using endsWith())
// function isEndedWith(sentence:string, word:string):boolean{
//     return sentence.endsWith(word);
// }

// console.log(`is sentence ended with word car : ${isEndedWith('there is a car','car')}`);
// console.log(`is sentence ended with word car : ${isEndedWith('there is a car','van')}`);

// slicing string and triming spaces (slice(), trim())
// function afterSliced(word:string,num1:number, num2:number):string{
//     return word.slice(num1,num2).trim();
// }
// console.log(`after sliced: ${afterSliced("Elephant in the jungle",8,11)}`);


// //Printing the repeatation of string number of times( using repreat(num))
// function repeatString(word:string, num:number):string{
//     return word.repeat(num);
// }
// console.log(`repeat word call 5 times : ${repeatString('call',5)}`);
// console.log(`repeat word call 5 times : ${repeatString('call ',5)}`);


// use of slice, splice, concat in array
// let array:(number|string)[] =[1,2,3,4];
//console.log(array.slice(0,2));
// array.slice(0,2);
// console.log(array); 
// array.splice(0,2);
// console.log(array);
// array.splice(0,2,14,15);
// array.splice(0,2,'call','fail');
// console.log(array);
// console.log(array.splice(0, 2));
// console.log(array.concat(8,9));

// // use of forEach to loop inside array
// let array:number[] = [1,2,3,4,5]
// array.forEach(function(num:number):void{
//     if(num%2===0){
//         console.log(num);
//     }
// })


// function foo(bat?:any) {
//     if (bat) {
//       bat = console.log("bat");  
//       return bat;
//     } 
//     const long = console.log("short");  
//     return long;
//     console.log("call");
// }
//   console.log(foo('false')); 



// function goStop(flag:any, go:any, stop:any){
//     //implement this function
//     if (flag) {
//         return go();
//     } else {
//         return stop();
//     }
// }

// // let  gosto = goStop(100, ()=> "go!", () => "stop!"); //gosto === "go!"
// // let gosto =  goStop(0, ()=> "go!", () => "stop!"); //gosto === "stop!"
// // let gosto = goStop(-100, ()=> "go!", () => "stop!"); //gosto === "go!"
// // let gosto =  goStop(true, ()=> "go!", () => "stop!"); //gosto === "go!"
// let gosto = goStop(false, ()=> "go!", () => "stop!"); //gosto === "stop!"
// console.log(gosto);



//Use of reduce
// let array = [1,2,3,4,5];
// let total = array.reduce((sum,current)=>sum+current,0);
// console.log(total);



// type donation={ funderId:number;amount:number;};
// // type donations=donation[];
// type day = {donations:donation[]; date:string};
// type Record= day[];

// const donation1:donation = { funderId: 1, amount: 100 };
// const donation2:donation = { funderId: 2, amount: 10 };
// const donation3:donation = { funderId: 3, amount: 1 };
// const donation4:donation = { funderId: 4, amount: 5 };
// const donation5:donation = { funderId: 5, amount: 15 };
// const day1:day = {donations: [donation1, donation2],    date: "01/10/2022",};
// const day2:day = {donations: [donation3, donation4, donation5],    date: "01/11/2022",};

// const dailyRecord:Record = [day1, day2];


// // 11a.  [3] Use a for loop in a function, dailyTotal, to find total amount donated for a given day.
// // console.log("expect 21: ", dailyTotal(day2.donations));
//  function dailyTotal(arr:Record):number[]{
//     let sumArr:number[]=[];
// for(let day of arr){
//     let eachDay = day.donations;
//     let sum=0
//     for(const donation of eachDay){
//         sum+=donation.amount;
//     }
//     sumArr.push(sum);
// }return sumArr;

//  }



// // 11b. [3] Use reduce in a function, dailyTotalReduce, to find total amount donated for a given day.
// // console.log("expect 110: ", dailyTotalReduce(day1.donations));
// function sumByReduce(arr:Record):number[]{
//     let resultArray:number[]=[];
//     for(const day of arr){
//         let eachDay = day.donations;
//         let eachDayDonation = [];
//         for(const donation of eachDay){
//             eachDayDonation.push(donation.amount)
//         }
//         let resultSum = eachDayDonation.reduce((sum,current)=>sum+current,0);
//         resultArray.push(resultSum);
    
//     }
//     return resultArray;

// }


// // 11c. [ 4] Write a function totalDonations using a for loop that will find the total donations across all days in the dailyRecord array.  HINT:  Make use of dailyTotal.
// // console.log("expect 131: ", totalDonations(dailyRecord));

// function totalDonation(dailyRecord:Record):number{
//     let totalSum:number=0;
//     for(let days of dailyRecord){
//         let dayDonation = days.donations
//        for(let donation of dayDonation){
//         totalSum+=donation.amount;
//        }

//     }return totalSum;
// }


// // 11d. [3] Write a function for the same specs as 11c but use reduce.  HINT:  Make use of dailyTotal.
// // console.log("expect 131 for: ", totalDonationsReduce(dailyRecord));

// function totalDonationReduce(dailyRecord:Record):number{
//     let resultArray:number[]=[];
//     for(const days of dailyRecord){
//         for(const donation of days.donations){
//             resultArray.push(donation.amount);
//         }
//     }
//     return resultArray.reduce((sum,current)=>sum+current);
// }


// // 11e. [5] Write a function, findBigDonations, that will return an array with all the dates that daily donations exceeded the maximum amount goal.  Each entry in the array should be an object that contains the date, and the total amount donated.  The second parameter for your function should be the maximum amount goal.  For the example below, the result should return the date and amounts for every donation that had an amount > 10.  In this example those are donations 1 and 2.

// // console.log(`expect [{day: "01/10/2022", amount: 100 },
// //       {day: "01/11/2022", amount: 15 }] :  `, findBigDonations(dailyRecord, 10) );


// function findBigDonations(dailyRecord:Record, num:number):any[]{
//     let resultArr:any[]=[];
//     for(const days of dailyRecord){
//         let bigDonation={day:days.date, amount:0};
//        for(const donation of days.donations){
//         if(donation.amount>num){
//             bigDonation.amount=donation.amount;
//             resultArr.push(bigDonation);
//         }
//        }
//     }return resultArr;


// }

// console.log(dailyTotal(dailyRecord));
// console.log(sumByReduce(dailyRecord));
// console.log(totalDonation(dailyRecord));
// console.log(totalDonationReduce(dailyRecord));
// console.log(findBigDonations(dailyRecord,10));

// type player = {name:string; points:number[]};
// type all =player[];


// const player1:player = {name: "Bob", points: [1, 2, 1]};
// const player2:player = {name: "Andre", points: [2, 0, 1]};
// const player3:player = {name: "Max", points: [1, 1, 1]};
// const players:all = [player1, player2, player3];

// // // write a function, averagePoints, to get an array containing the average points across for each player .
// // // Try with a regular for..of loop and then using map.
// // // console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// // //console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players));

// function averagePoints(players:all):any[]{
//     let averagePointArray:number[]=[];
//     for(const player of players){
//         let sum:number=0;
//         let average:number=0;
//         let playerDetails = {};
//         for(const points of player.points){
//             sum+=points;
            
//         }
//          average=sum/player.points.length;
//         playerDetails[player.name]=average;
       
        
//     }return averagePointArray;
// }

// function averageDetailPoints(players:all):player[]{
//     let resultArr:[{}]=[{}];
//    for(let i=0; i<players.length;i++){
//     let sum =0;
//     for(let j=0; j<players[i].points; j++){
//         sum+=players[i].points[j];

//     }
//    }

// }


// function averageReducePoints(players:all):number{
//     let resultArray:number[]=[];
//     for(const player of players){
//         let sumPoints=player.points.reduce((sum,current)=>sum+current);
//         resultArray.push(sumPoints);
//     }
//     return resultArray.reduce((sum,current)=>sum+current);
// }

// console.log(averagePoints(players));
// console.log(averageReducePoints(players));



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


// let arr:number[] = [1,20,31,14,5];
// let arr= ["apple",'Abide','alpha','ball',];


// // function soNum(a:number,b:number):number{
// //    if(a>b)return 1;
// //    if(a==b)return 0;
// //    if(a<b)return -1;
// //    return 0;
// // }
// // arr.sort((a,b)=>a-b);
// // arr.sort(function(a,b){return a-b});
// arr.sort();
// console.log(arr);

// delete arr[2];
// console.log(arr);
// console.log(arr.length);
// console.log(arr.slice(0,2));
// console.log(arr);
// console.log(arr.splice(0,1));
// console.log(arr);


// let str= "there,is,a,dog";
// let newStr = str.split(",");
// console.log(newStr);
// let finalStr=newStr.join("S")
// console.log(finalStr);

// let arr= [1,2,3,4];
// let result = arr.reduce((sum,current)=>sum+current,8);
// console.log(result);

// [{ date: '01/10/2022', id: 1, amount: 100 },
// { date: '01/10/2022', id: 2, amount: 10 },
// { date: '01/11/2022', id: 3, amount: 1 },
// { date: '01/11/2022', id: 2, amount: 5 },
// { date: '01/11/2022', id: 1, amount: 15 }
// ]

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 2, amount: 5 };
// const donation5 = { funderId: 1, amount: 15 };
// const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
// const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// const dailyRecord = [day1, day2];

// type Donation={funderId:number; amount:number};
// type Day = {donations:Donation[]; date:string};



// let resultArr:{date:string; id:number;amount:number}[]=[];
// return resultArr= dailyRecord.map((days)=>({
//     date:days.date,
//     for(let donation of days.donations){
//         id:donation1.funderId,
//         anount:donation1.amount
//     }

// }))

// arr,fn(){ let result = [];
   
//       for(let ele of arr){
//         result.push(ele);
//       }
// }




// function()
// const bar = [{x:1, y:2}, {x:10, y:4}, {x:4, y:2}]
// console.log("expect [3, 14, 6]:", smash(bar));



// let student={name:"aa",id:12};
// let result = Object.keys(student)


// function makeCounter():()=>number{
//     let count=0;
    
//     function innerfunc():number{
//          count++;
//          return count;
//     }
//     return innerfunc;
// }

// const counter1=makeCounter();
// const counter2 =makeCounter();
// console.log(counter1());
// console.log(makeCounter()());

// console.log(counter1());
// console.log(counter2());

// function b() {
//     function a() {
//     console.log(x);
//     }
//     const x = 10;
//     a();
//     }
//     const x = 20;
// b(); 

// type Student = {name:string; id:number};
// let student:Student[] =[{name:"sag",id:1},{name:'mad',id:4},{name:'mad',id:5}];
// function findStudent(arr:Student[]){
//      let result= arr.find((person)=> (person.name==="mad"));
//    return result;
// }
// console.log(findStudent(student));



// let arr = ['s','a','b','c','s','s'];



