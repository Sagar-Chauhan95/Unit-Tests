

type Student = { sid: number, answers: Answer[] };
type Answer = { qid: number, ans: string };
type Key = Answer[];

type Quiz = {
    students: Student[],
    key: Key, 
    answerComparator: (ans1: Answer, ans2: Answer) => number,
    scoreStudent: (sid: number) => number,
    getAverage: () => number
};
export const quiz = {} as Quiz;
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];


// /**
//  * 
//  * @param {Object} ans1 is an answer object
//  * @param {Object} ans2 is an answer object 
//  * @returns {number} difference of the identifiers
//  */
// function answerComparator(ans1:Answer, ans2:Answer):number{

// //IMPLEMENT THIS
// return ans1.ans ===ans2.ans?1:0;
// }

// /**
//  * 
//  * @param {*} sid student id
//  * @returns {number} score for student
//  * find this student
//  * sort the student answers
//  * compare them against key and add up matches
//  */
// quiz.scoreStudent = function (sid:number):number {
// //IMPLEMENT THIS
// const studentOfSid = quiz.students.find((num)=>(num.sid ===sid));
// if(!studentOfSid){
//     return 0;
// }else{
//     studentOfSid.answers.sort((a,b)=>(a.qid-b.qid));
//     let count =0;
//     for (const result of studentOfSid.answers){
//         for(const quizAnswer of quiz.key){
//         count+=answerComparator(result,quizAnswer)


// //         let score = 0;
// //   student.answers.forEach((studentAnswer, index) => {
// //     const keyAnswer = quiz.key[index];
// //     score += quiz.answerComparator(studentAnswer, keyAnswer);
        
//         }
//     }return count;
// }
// }


// /**
//  * @returns {number} average score of all students
//  * go through list of students and get score of each, then the average
//  */
// quiz.getAverage = function():number{

// //IMPLEMENT THIS
// const totalStudents = quiz.students.length;
// const totalScores = quiz.students.reduce((sum,student)=>sum+ quiz.scoreStudent(student.sid),0);
// return totalScores/totalStudents;

// };



/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1: Answer, ans2: Answer): number {
    //IMPLEMENT THIS
    return ans1.qid - ans2.qid
}

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid): number {
    //IMPLEMENT THIS
    let StId = quiz.students.find((findID) => findID.sid === sid)
    if (!StId)
        return 0
    let answerOfStudent = StId.answers.sort(answerComparator)
    let score = answerOfStudent.reduce((acc, curr, i) => {
        const studentAnswer = curr.ans;
        const correctAnswer = quiz.key[i].ans;
        if (studentAnswer === correctAnswer) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
    return score;

};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
    //IMPLEMENT THIS
    const score = quiz.students.reduce((sum, student) => sum + quiz.scoreStudent(student.sid), 0);
    return score / quiz.students.length;
};