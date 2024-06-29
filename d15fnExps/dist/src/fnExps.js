/**
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @param {number} num - input number
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @param {Array} arr - input array
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, func) {
    const resultArray = [];
    for (let element of arr) {
        resultArray.push(func(element));
    }
    return resultArray;
}
