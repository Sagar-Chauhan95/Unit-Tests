/**
 * @param {number} num is an integer
 * @returns {boolean} true if number is prime, else false
 * Prime numbers have only 2 factors: 1 and themselves.  
*/
export function checkPrime(num: number): boolean {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    
  // function for reversing array  
export function ssReverse(arr: number[]): number[]{ 
    arr.reverse();
    return arr; };
    
    
    // function for checking whether givn letter is vowel or not
export function isVowel(letter: string): boolean {
    let text:string = letter.toLowerCase();
       if(text ==="a" || text ==="e" || text ==="i" || text ==="o" || text === "u"){
        return true;
       }else{
        return false;
       }
}


// function for calculating compound interest
export function computeCompoundInterest(initialAmount:number, annualInterestRate: number,numberOfYears:number):number {
        let compoundAmount:number =0;
        let monthlyInterestAmount:number=0;
    
        // looping through the year to calculate interest for each month.
        for(let i=1; i<13; i++){
            monthlyInterestAmount= (initialAmount*numberOfYears*annualInterestRate)/(12*100);
            compoundAmount=initialAmount + monthlyInterestAmount;
            initialAmount=compoundAmount;                          // Reassigning total amount of current month as initial amount of next month.
        }
        return compoundAmount;
    
    }
    

// Function for calaculating downpayment of the house.
export   function calculateDowmPayment(cost:number):number{
        let downpayment: number = 0;
        if(cost<50000){
            downpayment = 0.05*cost;
        }else if(cost>=50000 && cost <100000){
            downpayment = 2500 + 0.1*(cost-50000);
        }else if ( cost>= 100000 && cost <200000){
            downpayment = 7500 + 0.15 * (cost-100000);
        }else {
            downpayment = 20000 + 0.1 * (cost-200000);
        }
        return downpayment;
    }
    
   
    // Function to calculate sum of digits of a number
export function sumDigits(integer:number):number{
            let sum =0;
            while(integer>=1){
                sum+=Math.floor(integer%10);
                integer=integer/10;
            }
            return sum;
        }
        
    // Function to calculate multiplication of digits of a number
export function multDigits(integer:number):number{
            let mult:number =1;
            while(integer>1){
                mult*= Math.floor(integer%10);
                integer=integer/10;
            }
            return mult;
        }


    // Function to convert temperature in Celsius to Fahrenheit
export function convertTempFahrenheit(tempInCelsius:number): number{
    let tempinFahrenheit:number =( 9/5)*tempInCelsius + 32;
    return tempinFahrenheit;
}


//Function to calculate distance between points
export function calculateDistance(x1:number,y1:number, x2:number,y2:number): number{
        let distance:number = Math.floor(Math.sqrt((x2-x1)**2 +(y2-y1)**2));
        return distance;
    }
    
    


    
            
        