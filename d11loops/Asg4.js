/* 4. Write code to print the number patterns on the console
12345
12345
12345
12345
12345
 */

import PromptSync from "prompt-sync";
const prompt =PromptSync()

let number ="";  // Assigning number as string.

//Looping until the rows of string we want.
for(let i=1; i<6; i++){

    // Looping until the length of string we want.
    for(let j=1; j<6; j++){
        number+=j;
    } 
    console.log(number);  // Printing the string after completion of first task.
    number="";
}

