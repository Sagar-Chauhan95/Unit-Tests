/*Cost of House Down Payment
Make a defining table and then write a program that calculates down payment for a home loan based
on following rules. Your program should prompt for the cost and write the down payment amount to
the console. */

import PromptSync from "prompt-sync";
const prompt =PromptSync()


let downpayment =0;         //Initializing downpayment as 0.
let costOfHouse = parseInt(prompt("Enter the cost of the house: "));

// Checking condition as per cost of house to apply different percentage.
if(costOfHouse<50000){
    downpayment = 0.05*costOfHouse;
} else if(costOfHouse>=50000 && costOfHouse<100000){
    downpayment = 1000 + 0.01*(costOfHouse-50000);
} else if (costOfHouse>=100000 && costOfHouse<200000){
    downpayment = 2000 +0.15*(costOfHouse-100000);
}else{
    downpayment =5000 + 0.1 * (costOfHouse-200000);
}
console.log("The downpayment as per the costprice " + costOfHouse + " of your house is " + downpayment);