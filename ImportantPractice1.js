/**
 * This is a practice file
 * My daily routing
 * sdjkh
//  * @parm {num}
 */
// const prompt =require('prompt-sync')();

// 1. WAYS TO MAKE NUMBER STRING
// let x =String(7);  // way to make string
// let x1 = ""+7;    // way to make string
// let y=Number(x);  // way to make number
// let z = +x;    // way to make number
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(x1));

// console.log(Math.sqrt(36));

// 2. Comparing using Nullesh coaelishing operator
// let x= false;
// let y= 0;
// let z = null;
// console.log(x||y||z);  // null
// console.log(x??y??z);  // false
// console.log(x||y);  // 0
// console.log(x??y);  // false



//3. Vlidating ways
//  let i = 3;
// while (i) {
//   alert( i-- );
// }


//4. USE OF SWITCH OPERATOR
// let x= parseInt(prompt("Enter a number: "));
// switch(x){
//     case 1: console.log("good");
//     break;

//     case 5: console.log("fail");
// }


//5. RETURNING GREATER THAN NEEDED
// function checkAge(age) {
//     let confirm;
//        let dan =1;
//     return (age > 18) || confirm('Did parents allow you?');
//   }

//   console.log(checkAge(12));



//6. RETURNING REVERSE OF ARRAY
  // function ssReverse(arr){ 
  //  // let array1:number[]=[];
  //  // for(let i = arr.length-1; i < arr.length; i++){
  //  //     array1.push(arr[i]);
  //  // }
  //  arr.reverse();
  //  return arr; };

  //  console.log(ssReverse([1,2,3,4]));

  

  // let arr =[1,2,3,4];
  // console.log(arr.at(-3));

  // const foo = console.log("hello");
  // // console.log(foo+ "call");
  // function write2file(content: number) {
  //   fsys.writeFile("./testWrite.txt", content, function () {}
  //   return fsys; );
  // }
  //   const returnVal = write2file( Math.max(1, 2, 3));



  

//   // function arrayDisplay(arr ) {
//   //   let array1 =[];
//   //   for(let element of array){
//   //     console.log(element);
//   //     array1.push(element);
      
//   //   }return array1;
//   // }

//   // let array = ["l","m","n"];
//   // console.log(arrayDisplay(array));


// // // let y=function sayHi(){
// // //     console.log("hello");
// // //     return 1;
// // //   }
// // //  let x = sayHi();
// // //  console.log(y);
// // //  console.log(y);


// // // function check(arr, array1){
// // //   let count=0;
// // //   let array2 =[];
// // //   for(let i=0; i<arr.length; i++){
// // //     for(let j=0; j<arr[i].length; j++){
// // //       for(let k =j; k<=j; k++){
// // //         if(arr[i][j]===array1[k]){
// // //           count++;

// // //         }
// // //       }
// // //     } 
// // //     array2.push(count);
// // //     count =0;

// // //   }return array2;
// // // }

// // // console.log(check([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]],  [3, 1, 2,4]));


// // // function generateArray(x,y){
// // //   let resultArray =[];
// // //   let counter=1;
// // //   for(let i=0; i<x; i++){
// // //     let x=[];
// // //     for(let j=0; j<y; j++){
// // //       x.push(counter);
// // //       counter++;
// // //     }resultArray.push(x);
// // //   }return resultArray;
// // // }

// // // console.log(generateArray(3,3));


// // // function xyz(arg1){
// // //   if (arg1) {
// // //    return true;
// // //   } else {
// // //    return;
// // //   }
// // // }
// // //   const returnVal = xyz("0");
// // //   console.log(returnVal);

// // Question no 10
// // // let cat = 'Felix';
// // // let treat;

// // // function dog(arg) {
// // //   let treat = 'bone';
// // //   arg = arg + treat;
// // //   console.log(arg);
// // //   treat = treat + arg;
// // //   return treat;
// // //   console.log(treat); 
// // // }
// // // console.log(cat);
// // // console.log(dog(cat));
// // // console.log(dog());
// // // console.log(treat);

// // Question no 11
// // // function calcDifferential(array1, array2){
// // //   let sum =0;
// // //   for(let i=0; i<array1.length; i++){
// // //     for(let j=i; j<=i; j++){
// // //       if(array1[i]===array2[j]){
// // //         let x= array1[i]-array2[j]+1;
// // //         sum+=x;
// // //       }
// // //       sum+=(array1[i]-array2[j]);

// // //     }
// // //   }return sum;
// // // }

// // // console.log(calcDifferential([30,20,40],[30,20,40]));

// // Question no 12
// // function matrixMatch(array1, array2){
// //   let match;
// //   if(array1.length !==array2.length || array1[0].length !== array2[0].length){
// //     console.log("Unequal rows and columns")
// //   }else{
// //     let resultArray=[]; 
// //     for(let i=0; i<array1.length; i++){
// //       resultArray.push([]);
// //       for(let j=0; j<array1[i].length; j++){
       
// //         if(array1[i][j]===array2[i][j]){
// //           match=1;
// //           resultArray[i].push(match);
// //         }else{
// //           match =0;
// //           resultArray[i].push(match);
// //         }
// //       }
// //     }return resultArray;


// //   }

// // }
  

// // const testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ];
// // const testArr2 = [ [1, 2, 10], [3, 2, 5], [9, 6, 7]];
// // console.log(matrixMatch(testArr1, testArr2)); 
// // // → [ [1, 1, 0] , [0, 1, 0], [1, 0, 0] ]


// // Question 13
// // function isPrime(num){
// //   if(num===1 || num ===0){
// //     return false;
// //   } else if( num ===2 || num ===3){
// //     return true;
// //   } else if(num%2===0 || num%3===0){
// //     return false;
// //   } else{
// //     return true;
// //   }
// // }
   
// // function factor(num){
// //   if(num<2){
// //     return 0;
// //   }else{
// //     let array=[];
// //     for(let i=2; i<num; i++){
// //       if(num%i===0 && isPrime(i)){
// //         array.push(i);
// //       }
// //     }return array;
// //   }
// // }
// // console.log(factor(10));
// // console.log(factor(6936));
// // console.log(factor(1));


// // function computeCharges(array){
// //   let resultArray = [];
// //   for(let i=0; i<array.length; i++){
// //     array.push([]);
// //     let sum =0;
// //     let min = array[i][0];
// //     let max = array[i][0];
// //     for(let j=0; j<array[i].length; j++){
// //       if(array[i][j]<array[i][0]){
// //         min =array[i][j];
// //       }
// //       if(array[i][j]>array[i][0]){
// //         max =array[i][j];
// //       }

// //       sum+=array[i][j];
// //     }
// //     let x=sum/array[i].length;
// //     resultArray[i].push(min,max,x);
    
// //   }return resultArray;

// // }

// // const charges = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]]
// // console.log(computeCharges(charges)) 
// // //  output [[1, 5, 3], [10, 60, 30], [100, 300, 200]]


// // function divide(array){
// //   let count =0;
// //   for(let i=0; i<array.length; i++){
// //     if(array[i] %5 === 0){
// //       count++;

// //     }
// //   }return count;
// // }
// // array = [5,6,7,8,9];
// //  array1 = [34,35,66,77,87, 100];
// // console.log(divide(array));
// // console.log(divide(array1))

// // function calcDifferential(array1, array2){
// //   let sum=0;
// //   for(let i=0; i<array1.length; i++){
// //       if(array1[i]===array2[i]){
// //         let y= 1;
// //         sum+=y;
// //       }else {
// //         sum+=array1[i]-array2[i];
// //       }
// //     }return sum;
// //   }


// // console.log(calcDifferential ([80, 78, 82], [50, 48, 52]));
// // //  → 90
// // console.log(calcDifferential ([10, 20, 30, 40], [10, 20, 20, 20]));
// // //  → 32


// let user={};
// user.name = "john";
// user.surname = "smoth";
// user.name = "pete";
// // delete user.name;
// console.log(user);


// var a = { x:1, y: "call", z:{d:1, f:"game"}};
// var b = a;
// b.z.d = 3;
// console.log(a);
// console.log(b);
// console.log(a===b);

// let a = {id:"student", class: 3, };
// a.rollNo = {sec:"A", grade:5};
// console.log(a);
// let b = a;
// b.rollNo.grade = 8;
// console.log(a);
// console.log(b);
// delete b.rollNo;
// console.log(b);
// let c = a.id +" "+ b.class;
// console.log(c);
// b.class = b.id;
// console.log(b);
// console.log(a);


// let student ={name:"sagar", class:3, section:{name: "sahfear", class:5, call:function(){console.log(this.name)}}};

// student.section.call();


// const foo= {sum};
// function sum(arr) {
//     let sum=0; 
//     for (let element of arr){
//     sum+=element;
// } 
// return sum; 
// }
// console.log(foo.sum);
// console.log(foo.sum([1,2,3]));

// bank.getBalance = function(customerId:number):number{
//     let sum =0;
//     const transactions =bank.transactionsDB[customerId-1].customerTransactions;
//     for(const transaction of transactions){
//         sum+=transaction;
// //     }return sum;
// // }



// // const students1 = {name:"sagar", roll:1};
// // const student2 = {name:"ram", roll:2};
// // const student3 = {name:"sham", roll:3};
// // const student = [students1,student2,student3];

// // sumRoll = function(){
// //     let sum =0;
// //     for(let i=0; i<student.length; i++){
// //         sum+= student[i].roll;   
// //     }
// //     return sum;
// // }
// // console.log(sumRoll(student));


// const students1 = {name:"sagar", roll:[1,2,3]};
// const student2 = {name:"ram", roll:[4,3,6]};
// const student3 = {name:"sham", roll:[2,6,1]};
// const student = [students1,student2,student3];

// sumRollPoints = function(){
//     let sum =0;
//     for(let i=0; i<student.length; i++){
//         let eachPoints = student[i].roll;
//         for(const points of eachPoints){
//             sum+=points;
//         }
//     }return sum;
// }

// printKeys = function(){
//     let resultArray = [];
//     for(let i=0; i<student.length; i++){
//         for(const key in student[i]){
//             resultArray.push(key);
//         }
        
//     }return resultArray;
// }

// console.log(sumRollPoints(student));
// console.log(printKeys(student));


// let x = 10;
// console.log(x.toString());
// console.log(typeof(x.toString()));


// // to check equality between decimal numbers.
// let x = 2/3;
// let y = 0.666667;
// console.log(y.toFixed(4)===x.toFixed(4));



// let classRoom = ["ram", "shym", 'day', "night"];
// classRoom.splice(2,3, "time");
// console.log(classRoom)

// classRoom.forEach(function(word){
//     console.log(word)
// });

// classRoom ={name:"ram",roll:32,age:11}
// let size;
// for(let key in classRoom){
//     console.log(key+ "=" +classRoom[key]);
//     if(Number(classRoom[key])===Number(true)){
//         size=size+1;

//     } 
// }console.log(size);

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
// for(let books of library){
//     if(books.readingStatus){
//         console.log("Already read" +' '+  books.title);
//     }else{
//         console.log("Not read" + " "+ books.title);
//     }
// }

// let text ='42px';
// let integer = parseInt(text,10);
// console.log(integer);

// console.log(typeof(105..toString()))

// let x =[1,2,3,4,5];
// // delete x[3];
// //  x.unshift(1,1);
// // console.log(x);
// x.splice(3,0,13,11)
// console.log(x);

// console.log(x.length);

// function sayHi() {
//   console.log( "Hello" );
//   }
//   const myHi = sayHi();
//   console.log( sayHi() );
//   function higherOrder() { return sayHi(); }
//   higherOrder();

// let x={}
// x.name="dog";
// x.age=12
// console.log(x);



function ask(question,yes,no){
    const userResponse = prompt(question);
    if(userResponse.toLowerCase()==='yes'){
        yes();
    }no();

}
const showOk = ()=>{console.log("You agreed")};
const showCancel =()=>{console.log("You canceled the execution")}



console.log(ask('Do you Agree', showOk, showCancel));

