/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myMap(arr, func) {
    return arr.map(func);
    //IMPLEMENTATION NEEDED
}
export function double(num) {
    return 2 * num;
}
export function cube(num) {
    return num * num * num;
}
double;
cube;
/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myFilter(arr, func) {
    //IMPLEMENTATION NEEDED
    return arr.filter(func);
}
export function even(num) {
    return num % 2 == 0;
}
export function greater1(num) {
    return num > 1;
}
even;
/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
export function myReduce(arr, func, initial) {
    //IMPLEMENTATION NEEDED
    return arr.reduce(func, initial);
}
export function sum(acc, current) {
    return acc + current;
}
export function mult(acc, current) {
    return acc * current;
}
