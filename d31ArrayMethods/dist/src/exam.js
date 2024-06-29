export function firstLast(names) {
    return names.map((item) => {
        const [firstName, lastName] = item.split(" ");
        return { firstName, lastName };
    });
}
;
export function replaceEnds(arr, numA, numB, numC, numD) {
    let newArr = arr.slice();
    newArr.splice(0, 2, numA, numB);
    newArr.splice(4, 6, numC, numD);
    return newArr;
}
;
export function higho(operation, arr) {
    return arr.map(operation);
}
export function square(num) {
    return num * num;
}
;
export function absVal(num) {
    return Math.abs(num);
}
// const add = (num1, num2) => {
//     return num1 + num2
//   }
//   const subtract = (num1, num2) => {
//     return num1 - num2
//   }
//   const compute = (operation, num1, num2) => {
//     return operation(num1, num2)
//   }
//   compute(add, 5, 2) //=> returns 7
//   compute(subtract, 5, 2) //=> returns 3
// type session= {userId:number; duration:number};
//  type day = {sessions: session[]; date:string};
//  type Record = day[];
export function calculateDailyTotalDuration(sessions) {
    let sum = 0;
    for (let session of sessions) {
        sum += session.duration;
    }
    return sum;
}
export function calculateTotalDuration(dailyRecord) {
    let totalSum = 0;
    for (let days of dailyRecord) {
        for (let episode of days.sessions) {
            totalSum += episode.duration;
        }
    }
    return totalSum;
}
export function getAllSessions(dailyRecord) {
    let resultArr = [];
    for (let days of dailyRecord) {
        resultArr = days.session.concat(days.session);
    }
    return resultArr;
}
