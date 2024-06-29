

console.log("in app.ts", "sum of [1,2,3] is: ", sum([1,2,3]));
/**
 * 
 * @param {number} aa is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa: number, b: number, c: number): number{ 
    if((aa >= b) && (aa >= c)){
        return aa
    }
    else if((b >= aa) && (b >= c)){
        return b;
    }
    else{
        return c
    }
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number{
    let sum = 0;
    for(let num of arr)
    {
        sum += num
    }
    return sum;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr: number[]): number{
    let multiply = 1;
    for(let num of arr){
        multiply *= num;
    }
    return multiply;

}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words 
 * @returns {number} length of longest word
 */
export function findLongestWord(arr: string[]): number{
    let longestWordLength = arr[0].length;
    for(let word of arr)
    {
        if(word.length > longestWordLength){
            longestWordLength = word.length;
            return longestWordLength;
        }
    }
    return longestWordLength;
}


/* reverseArrayInPlace */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words 
 * @param {Array} arr of number
 * @param {Array} arr of numbers
 * @returns {number} length of longest word
 */

export function reverseArray(arr: number[] | string[]):(number[] | string[]) {
    return arr.reverse();
}


export function reverseArrayInPlace(arr: (number[] | string[])){
    let array1=[];
    
    for(let i:number =arr.length- 1; i>=0; i--){
        array1.push(arr[i]);
         
    }return array1;
   
}

export function scoreExams(arr:number[][], checkArray : number[]){
    let count:number=0;
    let resultArray:number[] = []
    for(let i=0; i< arr.length; i++){
        for(let j=0; j< arr[i].length; j++){
            for(let k=j; k<=j; k++){
                if(arr[i][j]===checkArray[k]){
                    count++;

                }
            }
        }
        resultArray.push(count);
        count=0;

    }return resultArray;
}

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 * 
 * @param {*} rows num rows
 * @param {*} columns num cols
 * @returns {Array} 2d array with entries i + j
 */
// export function generateArray(rows: number, cols: number): number[][]{


export function generateArray(rows:number, columns:number){
    let resultArray: number[][]=[];
    let counter:number = 1;
    for(let i=0; i<rows; i++){
        let rows:number[]=[];
        for(let j=0; j<columns; j++){
            rows.push(counter);
            counter++;
        }
        resultArray.push(rows);
    }
    return resultArray;
}



