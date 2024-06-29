/*Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales from $300 and up to but less than $500
• 2% for sales $500 or above
• If the salesman is not salaried then
• 2% for sales from $300 and up to but less than $500
• 3% for sales $500 or above */

import PromptSync from "prompt-sync";
const prompt =PromptSync()

let status = prompt("Enter word salaried if you receive salary otherwise enter word notSalaried: ")
let salesmanSalary = prompt("Enter your salary in $: ");
let salesCommission = 0;

//Checking the status of sales man whether s/he is salaried or not.
if(status =="salaried"){

    // Checking range of salary and applying different percentages of comission.
    if(salesmanSalary<300){
        salesCommission +=0;
    }else if(salesmanSalary >=300 && salesmanSalary <500){
        salesCommission+= salesmanSalary*0.01;
    }else{
        salesCommission+= salesmanSalary*0.02;
    }
}else{
    if(salesmanSalary<300){
        salesCommission+=0;
    }else if(salesmanSalary>300 && salesmanSalary<=500){
        salesCommission+=salesmanSalary*0.02;
    } else{
        salesCommission+= salesmanSalary*0.03;

    }
}
console.log("The commission as per your status and salary is: " + salesCommission);


