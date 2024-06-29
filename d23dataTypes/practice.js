const prompt=require('prompt-sync')();

// let arr = [5, 2, 1, -10, 8];
// // arr.sort((a,b)=>a-b);
// // arr.sort((a,b)=>b-a);
// console.log(arr)

// const { truncate } = require("fs");


// let str ="apple";
// // console.log(str[3]);
// let x = str.slice(0,1).toUpperCase() + str.slice(1);
// console.log(x);

// let name = "background-color";
// let call = name.split('-');
// console.log(call);

// let array =['call','name','cast'];
// // let result = array.map(x=>x.length);
// // let result = array.map(x=>"call");
// let result =array.map(x=>array.indexOf(x) +":"+ x.length);
// console.log(result);

// // array.filter(if(x=)

// // let text = "-webkit-transition";
// let text ='list-style-image';
// let newText='';
// for(let i=0; i<text.length; i++){

//     if(text[i]==='-'){
//         i++;
//        let x= text[i].toUpperCase();
//         newText+=x;
//     }else{
//         newText+=text[i];
        
//     }
// }
// console.log(newText);

// let data={name:'fb',id:1};

// for(const keys in data){
//     if(keys ==="name"){
//         console.log(keys);
//     }
// }

// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };

// const players = [player1, player2, player3];

// const result = [{}];

// players.forEach(player => {
//   result[0][player.name] = player.points.reduce((sum, point) => sum + point, 0);
// });

// console.log(result);

// function runShow(str, yes, no){
//    let word = prompt(str);
//     if(word==='yes'){
//         yes();
//     }else{
//         no();
//     }

// }


// function show(){
//     console.log("Correct");
// }
// function notShow(){
//     console.log("incorrect");
// }



// console.log(runShow('Do you agree',show,notShow));