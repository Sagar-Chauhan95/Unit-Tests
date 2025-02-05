export {collectRoomNumbers, collectRoomsAndCapacities , collectLabeledRoomCaps, countStudentsInClassroom, 
    findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge};  //implement these
  
  type Classroom = {roomNumber:number;capacity:number;students:Student}[];
      //YOUR CODE HERE
  
  
  type Student = {name:string; age:number}[];
      //YOUR CODE HERE
    
  
  
  export const classrooms:Classroom = [
      {
        roomNumber: 101,
        capacity: 30,
        students: [
          { name: "Alice", age: 18 },
          { name: "Bob", age: 19 },
          { name: "Charlie", age: 17 },
        ],
      },
      {
        roomNumber: 102,
        capacity: 25,
        students: [
          { name: "David", age: 20 },
          { name: "Eve", age: 18 },
        ],
      },
      {
        roomNumber: 103,
        capacity: 35,
        students: [
          { name: "Frank", age: 19 },
          { name: "Grace", age: 20 },
          { name: "Helen", age: 17 },
        ],
      },
    ];
  /* 
  1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
  2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
  string format:  [“101::30”, "102::25”, “103::35”].
  3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
  format [{roomNumber: 101, capacity: 30} , …  ]
  4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
  roomNumber as parameters and returns the number of students in the specified classroom.
  5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
   minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
  6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum 
  age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
  7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns 
  the average age of students across all classrooms.
   */

   function collectRoomNumbers(classrooms:Classroom):number[]{
  //   let roomNumArray:number[]=[];
  //  for(const rooms of classrooms){
  //   let {roomNumber}:{roomNumber:number}=rooms;
  //   roomNumArray.push(roomNumber);
  //  }
  //  return roomNumArray;

  return classrooms.map((rooms)=>rooms.roomNumber);

  }

  function collectRoomsAndCapacities(classrooms:Classroom):string[]{
    // let resultArr:string[]=[];
    // for(const rooms of classrooms){
    //   let str:string="";
    //   let {roomNumber,capacity}:{roomNumber:number;capacity:number}=rooms;
    //   str+=roomNumber+": :"+capacity;
    //   resultArr.push(str);
    // }
    // return resultArr;

    return classrooms.map((rooms)=>(rooms.roomNumber + '::' +rooms.capacity ));

  }

  function collectLabeledRoomCaps(classRooms:Classroom):{roomNumber:number,capacity:number}[]{
    return classRooms.map((rooms)=>{ const finalRooms = {roomNumber :rooms.roomNumber, capacity : rooms.capacity};
  return finalRooms;})
   
  }

  function countStudentsInClassroom(classRooms:Classroom,roomNumber:number):number|undefined{
    let classRoom= classRooms.find((classRoom)=>(classRoom.roomNumber==roomNumber));
    return classRoom?.students.length;

  }

  function findClassroomsWithCapacity(classRooms:Classroom,minCapacity:number):Classroom{
   return classRooms.filter((classRoom)=>(classRoom.capacity>= minCapacity))
    
  }

  function findStudentsOlderThan(classRooms:Classroom, age:number):Student[]{
    let result:Student[]=[];
    classRooms.forEach((classRoom)=>{
      result =result.concat(classRoom.students.filter((student)=>student.age>age));
    });
    return result;

  }


// function averageStudentAge(classRooms:Classroom):number{
//   //maping through classroom to get student
//   let result = classRooms.map((classRoom)=>{

//     //maping through student array to get student age
//     let studentList = classRoom.students.map((studentAge)=>studentAge.age);
//     let sum=0;
//     //getting sum of student age
//     for(const ages of studentList){
//       sum+=ages;
//     }
//     // returning average of student ages of each classroom
//     return sum/studentList.length;
//   });
// //getting average of total student average ages
//   let totalAges=  result.reduce((sum,current)=>sum+current,0);
//   return totalAges/classRooms.length;

// }

function averageStudentAge(classrooms: Classroom): number {
  let totalAge = 0;
  let totalStd = 0;
  classrooms.forEach((classroom) => {
    classroom.students.forEach((student) => {
      totalAge += student.age;
      totalStd++;
    });
  });
  return totalAge / totalStd;
}
  
  
  
    