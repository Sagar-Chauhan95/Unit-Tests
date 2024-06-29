// /*  Question 1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and
// number argument for salesAmount. It should return the sales commission based on following
// rules. First make a defining table for the function.
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
// first 500)
// • If the salesman is not salaried then
// • no commission for sales below $300
// • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
// first 500) */

function computeSalesCommission(amount:number, status:boolean):number {
    let commission: number =0;
    console.log("call");
    debugger
    if(status== true){
        if(amount<300){
            commission=0;
        } else if(amount>=300 && amount<=500){
            commission=0.01*amount;
            
        } else{
            commission=0.02*(amount-500) + 0.01*500;
        }
    }else{
        if(amount<300){
            commission=0;
        }else if(amount>300 && amount<500){
            commission = 0.02 *amount;
        } else {
            commission= 0.03 * (amount-500) + 0.02*500;
        }
    }
    return commission;

}

console.log("The sales commission is $" + computeSalesCommission(200, true))
console.log("The sales commission is $" + computeSalesCommission(200, false))
console.log("The sales commission is $" + computeSalesCommission(300, true))
console.log("The sales commission is $" + computeSalesCommission(300, false))
console.log("The sales commission is $" + computeSalesCommission(3500, true))
console.log("The sales commission is $" + computeSalesCommission(3500, false))


// // /*Queestion 2. Make a defining table and function that will return the balance of a savings account that
// // compounds interest monthly. Parameters for the function will be:
// // • initial amount
// // • annual interest rate
// // • number of years to compound
// // Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will
// // add the appropriate interest each month.
// // console.log("expect 110.47", compoundInterest(100, 10, 1));
// // console.log("expect 16470.09", compoundInterest(10000, 5, 10)); */


// function computeCompoundInterest(initialAmount:number, annualInterestRate: number,numberOfYears:number):number {
//     let compoundAmount:number =0;
//     let monthlyInterestAmount:number=0;

//     // looping through the year to calculate interest for each month.
//     for(let i=1; i<13; i++){
//         monthlyInterestAmount= (initialAmount*numberOfYears*annualInterestRate)/(12*100);
//         compoundAmount=initialAmount + monthlyInterestAmount;
//         initialAmount=compoundAmount;                          // Reassigning total amount of current month as initial amount of next month.
//     }
//     return compoundAmount;

// }
// console.log(computeCompoundInterest(100,10,1));
// console.log(computeCompoundInterest(10000,5,10));


// // /*Question 3. Cost of House Down Payment
// // Make a defining table and then write a function that calculates down payment for a home loan based on
// // following rules. Your function should have a parameter for the cost and return the down payment
// // amount. */

// // function calculateDowmPayment(cost:number):number{
// //     let downpayment: number = 0;
// //     if(cost<50000){
// //         downpayment = 0.05*cost;
// //     }else if(cost>=50000 && cost <100000){
// //         downpayment = 2500 + 0.1*(cost-50000);
// //     }else if ( cost>= 100000 && cost <200000){
// //         downpayment = 7500 + 0.15 * (cost-100000);
// //     }else {
// //         downpayment = 20000 + 0.1 * (cost-200000);
// //     }
// //     return downpayment;
// // }

// // console.log(calculateDowmPayment(40000));
// // console.log(calculateDowmPayment(50000));
// // console.log(calculateDowmPayment(100000));
// // console.log(calculateDowmPayment(250000));

// // /*Question 4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or
// // product of the digits in the number. Use the / and % operators to find the digits.*/ 

// // function sumDigits(integer:number):number{
// //     let sum =0;
// //     while(integer>=1){
// //         sum+=integer%10;
// //         integer=integer/10;
// //     }
// //     return sum;
// // }
// // function multDigits(integer:number):number{
// //     let mult:number =1;
// //     while(integer>1){
// //         mult*= integer%10;
// //         integer=integer/10;
// //     }
// //     return mult;
// // }

    
// // console.log(sumDigits(1234), multDigits(1234));
// // console.log(multDigits(1234));
// // console.log(sumDigits(102), multDigits(102));
// // console.log(sumDigits(8), multDigits(8));

// // /*Question 5. Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
// // and returns the temperature in Celsius.
// // console.log("expect 0: ", convertFahrenheit (32));
// // console.log("expect -17.7778: ", convertFahrenheit (0));
// // console.log("expect 100: ", convertFahrenheit (212)); */


// // function convertTempFahrenheit(tempInCelsius:number):number{
// //     let tempinFahrenheit:number =( 9/5)*tempInCelsius + 32;
// //     return tempinFahrenheit;
// // }

// // console.log(convertTempFahrenheit(32));
// // console.log(convertTempFahrenheit(0));
// // console.log(convertTempFahrenheit(212));


// // /*Question 6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
// // between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
// // console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5)); */

// // function calculateDistance(x1:number,y1:number, x2:number,y2:number): number{
// //     let distance:number = Math.sqrt((x2-x1)**2 +(y2-y1)**2);
// //     return distance
// // }

// // console.log(calculateDistance(0,0,5,5));