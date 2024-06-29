export interface StudentQuiz { studentId: number, quizAnswers : number[] };

export function gradeStudent(studentAnswers :number[], correct: number[]): number{
    let count =0;
    for (let i=0; i<studentAnswers.length; i++){
        if(studentAnswers[i]=== correct[i]){
            count++
        }
        
    }return count;
}

export function gradeQuiz(studentQuiz: number[][], correct:number[]): number[]{
    let resultArray =[];
    for (let i=0; i <studentQuiz.length; i++){
        let count =0;
        for( let j=0; j<studentQuiz[i].length; j++){
            if(studentQuiz[i][j]===correct[j]){
                count++;
            }
        } resultArray.push(count);

    }return resultArray;

}
// student1;
// student2;
// student3;

type LabeledScore = {
    id:number, score:number
}

export function gradeQuizLabeled(studentQuizzes:StudentQuiz[], correct:number[] ): LabeledScore[]{

    let resultArray:LabeledScore[] =[];
     for ( const students of studentQuizzes){
        //Get student id of all student
        const studentID = students.studentId;

        // Get each student answer
        const studentAnswers = students.quizAnswers;

        let studentScore = 0;
        // Loop through student answer and compare with correct answer
        for ( let i=0; i<studentAnswers.length; i++){
            if(studentAnswers[i]===correct[i]){
                studentScore+=1;
            }
        }resultArray.push({id:studentID, score:studentScore});

     }return resultArray;

}

