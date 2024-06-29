// let arr = [1,2,3,4,5];
// let product = arr.reduce((pro,current)=>pro*current,1);
// let maxNum = arr.reduce((max,current)=>(current>max)?current:max);
// console.log(product);
// console.log(maxNum);
const session1 = { userId: 1, duration: 60 };
const session2 = { userId: 2, duration: 45 };
const session3 = { userId: 2, duration: 30 };
const session4 = { userId: 3, duration: 15 };
const session5 = { userId: 3, duration: 75 };
const day1 = { sessions: [session1, session2], date: "01/10/2022" };
const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
const dailyRecord = [day1, day2];
function getDuration(dailyRecord) {
    return dailyRecord.reduce((userDurations, day) => {
        day.sessions.forEach(session => {
            const { userId, duration } = session;
            userDurations.set(userId, (userDurations.get(userId) || 0) + duration);
        });
        return userDurations;
    }, new Map());
}
const userDurations = getDuration(dailyRecord);
console.log(userDurations);
export {};
