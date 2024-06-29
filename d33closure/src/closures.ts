

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
// export function inArray(arr:number[]):(num:number)=>boolean{
//     return function (num:number):boolean{
//          for(const element of arr){
//             if(num===element){
//                 return true
//             }
//          }
//          return false;
//     }
// }

export function inArray(arr:number[]):(num:number)=>boolean{
    return (num:number)=>arr.includes(num);
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
export function inBetween(low:number,high:number):(num:number)=>boolean{
    return function(num:number):boolean{
        return num>=low && num<=high       
    
}
}







/**
 * @returns {Function} closure that returns it's number
 * 
 */

// export function makeArmy() {
//     let shooters = [];
  
//     let i = 0;
//     while (i < 10) {
//         let j=i;
//       let shooter = function():void { // create a shooter function,
//         alert( j); // that should show its number
//       };
//       shooters.push(shooter); // and add it to the array
//       i++;
//     }
  
//     // ...and return the array of shooters
//     return shooters;
//   }

export function makeArmy():(()=>number)[]{
    return [...Array(10)].map((_,i)=>()=>i);


}
  
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
