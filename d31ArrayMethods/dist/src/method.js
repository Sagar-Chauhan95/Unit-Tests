/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    let newArr = arr.slice();
    return newArr.filter((numbers) => (numbers >= a && numbers <= b));
}
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr, a, b) {
    let filteredArray = arr.filter((number) => (number >= a && number <= b));
    filteredArray.length;
    // function filterRangeInPlace(arr, a, b) {
    //     for (let i = 0; i < arr.length; i++) {
    //       let val = arr[i];
    //       // remove if outside of the interval
    //       if (val < a || val > b) {
    //         arr.splice(i, 1);
    //         i--;
    //       }
    //     }
    //   }
    //   let arr = [5, 3, 8, 1];
    //   filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    //   alert( arr ); // [3, 1]
}
export const calculator = {
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate: function (str) {
        let [numA, operator, numB] = str.split(" ");
        // use of destructure to allocate strings to element of array;
        const a = parseFloat(numA);
        const b = parseFloat(numB);
        if (!(calculator.methods[operator] || isNaN(a) || isNaN(b))) {
            throw new Error("invalid input");
        }
        const operation = this.methods[operator];
        return operation(a, b);
    },
    addMethod: function (str, calculatorFunction) {
        this.methods[str] = calculatorFunction;
    }
};
export function unique(arr) {
}
export function groupById(users) {
    // declare usersById to be an object with string keys and User values
    const usersById = {};
    // FURTHER IMPLEMENTATION REQUIRED HERE
    return usersById;
}
export function map2fullName(users) {
    let result = [];
    // FURTHER IMPLEMENTATION REQUIRED HERE
    return result;
}
export function sortByAge(users) {
    // FURTHER IMPLEMENTATION REQUIRED HERE
}
export function findOldest(users) {
    let oldest = users[0];
    // FURTHER IMPLEMENTATION REQUIRED HERE
    return oldest;
}
/* getAverageAge using reduce */
export function getAverageAge(users) {
    return 0;
}
