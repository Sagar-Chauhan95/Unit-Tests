/*Write a loop that continually prompts for age until you enter age older than 18
• Write both while and do while versions. */



import PromptSync from "prompt-sync";
const prompt =PromptSync()

// User prompt for age.
let inputAge = parseInt(prompt("Enter your age: "));

// Looping unsless the age is below 18 using while loop.
while(inputAge<18){
    inputAge = prompt("Enter your age: ");
}

// Solving the same problem using do-while loop.
do{
    inputAge =prompt("Enter your age: ")
}
while(inputAge<18)
