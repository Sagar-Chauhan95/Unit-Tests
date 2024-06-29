
// //write any code you want to test here and run with npm run app
// import {classrooms, countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge} from './classrooms.js';

// console.log(countStudentsInClassroom(classrooms, 102));
// console.log(findClassroomsWithCapacity(classrooms, 30));
// console.log(findStudentsOlderThan(classrooms, 18));
// console.log(averageStudentAge(classrooms));





// const team =["bob","fred","jim"];
// const [firstPerson, secondPerson,thirdPerson]=team;
// console.log(firstPerson);
// console.log(secondPerson);
// console.log(thirdPerson);


// const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };


// const {point:one,shooting:two,power:three, small:four,center:five}=team;
// console.log(one);
// console.log(two)
// console.log(three);
// console.log(four);
// console.log(five);
// console.log(team.point);


// let arr = ['sagar', 'chau',5,'dn',6];
// let [fname,sname,...remain]=arr;
// console.log(fname);
// console.log(sname);
// console.log(remain);
// console.log(remain[1]);

// let student ={name:"sagar", roll:36, faculty:'msd'}
// let name,roll,faculty;
// // let {name,roll,faculty}=student;
// ({name,roll,faculty}={name:"sagar",roll:36,faculty:"msd"});
// console.log(name);
// console.log(roll);
// console.log(faculty);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   let maxSalary=0;
//   let maxName=null;

// for(let [name,salary] of Object.entries(salaries)){
//     if(salary>maxSalary){
//         maxSalary=salary
//         maxName=name;
//     } 

// }
// console.log(maxSalary);
// console.log(maxName);

// let user = {
//     name: "John",
//     age: 30,
//     toString(){return `{name:"${this.name}" age:"${this.age}}`;}
// }


// console.log(user);
// type classRooms = {name:string;age:number}[];

// let classRoom:classRooms =[{name:"sag", age:10},{name:"dag", age:11}];
// let newArr:number[]=[];
// let nameArr:string[]=[];
// for(const rooms of classRoom){
//     let {name,age}:{name:string;age:number}=rooms;
//     newArr.push(age);
//     nameArr.push(name);
 
// }
// console.log(newArr);
// console.log(nameArr);



// let student = {name:'sagar', age:20};
// Object.entries(student).forEach((item)=>{console.log(item)});
// console.log(Object.entries(student));
