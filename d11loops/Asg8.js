/*Write a JavaScript program to prompt for an integer and compute the sum of all the digits. Use the /
and % operators to find the digits.*/

import PromptSync from "prompt-sync";
const prompt =PromptSync()

let inputInteger = prompt("Enter the numbers: ");     // Prompt for number as string
let sum =0;         // Initializing sum as 0.                                     

// Looping through the length of the string.
for(let i=inputInteger.length; i>0; i--){
    sum+=parseInt(inputInteger%10);     // Addition of reminder of the string to sum.
    inputInteger=inputInteger/10;       // Reassigning the input Integer for next process

}
console.log(sum);   // Printing the result of process.





    


