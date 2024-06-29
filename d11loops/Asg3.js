/*Make a defining table and program to print out the balance of a savings account that
compounds interest monthly. Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound
Do not use the mathematical formula for compound interest. Use a loop that calculates the
interest for each month and compounds that over the iteration—i.e., add it to the current
balance. Ask the professor or TA if this is not clear. */

import PromptSync from "prompt-sync";
const prompt =PromptSync()

let initialAmount = parseInt(prompt("Enter the initial amount: "));
const annualInterestRate = parseInt(prompt("Enter the annual interest rate: "));
const noOfYears = parseInt(prompt("Enter the number of years that you want to compound: "));
let monthlyInterest = annualInterestRate/12;
let compoundedAmount = null;
let monthlyInterestAmount=0;

 // Looping throught each month of the year
for(let i=1; i<13; i++){
    monthlyInterestAmount = (initialAmount*noOfYears*monthlyInterest)/100; 
    compoundedAmount = initialAmount+monthlyInterestAmount;
    console.log("The total amount after " + i +" month is : " + compoundedAmount);
    initialAmount=compoundedAmount;        // Assigning compoundedAmount of current month as the initial amount of next month.
}

