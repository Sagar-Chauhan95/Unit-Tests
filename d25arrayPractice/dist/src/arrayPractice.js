export function doubleNums(arr) {
    return arr.map(num => num * 2);
}
export function doubleAges(arr) {
    return arr.map((user) => {
        return { name: user.name,
            age: user.age * 2 };
    });
}
export function filterEven(arr) {
    return arr.filter(item => item % 2 === 0);
}
export function filterOver10(arr) {
    return arr.filter((item) => item.age > 10);
}
export function findEvenNum(arr) {
    return arr.find((item) => item % 2 === 0);
}
export function findEvenAge(arr) {
    return arr.find((item) => item.age % 2 === 0);
}
export function includesEvenNum(arr, num) {
    if (arr.includes(num)) {
        return true;
    }
    return false;
}
// export function includesEvenAge(arr){
// }
