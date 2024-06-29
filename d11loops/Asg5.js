/*1
22
333
4444
55555
 */

import PromptSync from "prompt-sync";
const prompt =PromptSync()

let number="";  // Assigning the type of number as string.

// Looping to get number of rows
for(let i=1; i<6; i++){

    //Looping to get string along with number of columns.
    for(let j=1; j<=i; j++){
        number+=i;
        
    }
    console.log(number);  // Printing the result after the completion of process
    number="";             // Reassigning the value of number for the next row.
}


