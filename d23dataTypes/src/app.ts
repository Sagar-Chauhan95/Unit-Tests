// import { truncate } from "fs";

/**
 * 
 * @param {*} str 
 */
export function ucFirst(str:string):string {
   return str.slice(0,1).toUpperCase() + str.slice(1);


 
}

/**
 * 
 * @param {*} str 
 */
export  function checkSpam(str:string):boolean{
   let lowerCase = str.toLowerCase();
   return lowerCase.includes('viagra') || lowerCase.includes("xxxxx")

}

/**
* 
* @param {*} str 
* @param {*} maxlength 
*/
export   function truncate(str:string,maxlength:number):string{
    return str.slice(0,maxlength);
    
}



/**
* 
* @param {Array} arr of numbers
* @returns {number} the total of the maximal subarray

*/
export function getMaxSubSum(arr:number[]):number {
    let maxSum=0;
    for(let i=0; i<arr.length;i++){
        let sumFixedStart =0;
        for(let j=i; j<arr.length; j++){
            sumFixedStart+=arr[j];
            maxSum=Math.max(maxSum, sumFixedStart);
        }
    }return maxSum;


}


export function camelize(str:string):string{
    let str1 = "";
    for(let i=0; i<str.length; i++){
        if(str[i]==='-'){
            i++;
            let letter = str[i].toUpperCase();
            str1+=letter;
        }else{
            str1+=str[i];
        }
    } return str1;   

}


export function extractCurrencyValue(str:string):number{
    return Number(str.slice(1));
} 