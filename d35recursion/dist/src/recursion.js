export { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, sumTreeValues };
function sumTo(num) {
    if (num === 1) {
        return 1;
    }
    else {
        return num + sumTo(num - 1);
    }
}
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function outputList(list) {
    if (list.next === null) {
        return list.value + " printed to console";
    }
    else {
        return list.value + " " + outputList(list.next);
    }
}
function outputListLoop(list) {
    let arr = [];
    let node = list;
    while (node) {
        arr.push(node.value);
        node = node.next;
    }
    let str = "";
    for (const element of arr) {
        str += element + " ";
    }
    return str + "printed to console";
}
function reverseList(list) {
    if (list.next === null) {
        return `${list.value}`;
    }
    else {
        if (list.value != 1) {
            let result = reverseList(list.next) + ' ' + list.value;
            return result;
        }
        else {
            let result = reverseList(list.next) + " " + list.value + ' printed to console';
            return result;
        }
    }
}
function reverseListLoop(list) {
    let arr = [];
    let node = list;
    while (node) {
        arr.push(node.value);
        node = node.next;
    }
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i] + " ";
    }
    return result + "printed to console";
}
function sumTreeValues(list) {
    let sum = 0;
    if (list.right === null && list.left === null) {
        return sum += list.value;
    }
    else if (list.left !== null && list.right === null) {
        return sum += list.value + sumTreeValues(list.left);
    }
    else if (list.left === null && list.right !== null) {
        return sum += list.value + sumTreeValues(list.right);
    }
    else {
        return sum += list.value + sumTreeValues(list.left) + sumTreeValues(list.right);
    }
}
