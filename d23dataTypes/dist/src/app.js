// import { truncate } from "fs";
/**
 *
 * @param {*} str
 */
export function ucFirst(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
/**
 *
 * @param {*} str
 */
export function checkSpam(str) {
    let lowerCase = str.toLowerCase();
    return lowerCase.includes('viagra') || lowerCase.includes("xxxxx");
}
/**
*
* @param {*} str
* @param {*} maxlength
*/
export function truncate(str, maxlength) {
    return str.slice(0, maxlength);
}
/**
*
* @param {Array} arr of numbers
* @returns {number} the total of the maximal subarray

*/
export function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}
export function camelize(str) {
    let str1 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            i++;
            let letter = str[i].toUpperCase();
            str1 += letter;
        }
        else {
            str1 += str[i];
        }
    }
    return str1;
}
export function extractCurrencyValue(str) {
    return Number(str.slice(1));
}
