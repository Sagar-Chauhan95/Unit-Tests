/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { gradeStudent, gradeQuiz, gradeQuizLabeled } from "../src/quiz.js";
describe("quiz tests", function () {
    const student1 = { studentId: 101, quizAnswers: [1, 1, 2, 4] };
    const student2 = { studentId: 102, quizAnswers: [2, 1, 2, 2] };
    const student3 = { studentId: 103, quizAnswers: [3, 1, 3, 4] };
    const CORRECT_ANSWERS = [3, 1, 2, 4];
    const studentQuizzes = [student1.quizAnswers, student2.quizAnswers, student3.quizAnswers];
    // How do i read from the obj type to add the quizes result to the
    const studentQuizz = [student1, student2, student3];
    it("gradeStudent --grade for Student 1", function () {
        assert.deepEqual(gradeStudent(student1.quizAnswers, CORRECT_ANSWERS), 3);
    });
    it("gradeQuiz -- grades for all the students ", function () {
        assert.deepEqual(gradeQuiz(studentQuizzes, CORRECT_ANSWERS), [3, 2, 3]);
    });
    it("gradeQuizLabeled -- labeled objects grades for all the students ", function () {
        assert.deepEqual(gradeQuizLabeled(studentQuizz, CORRECT_ANSWERS), [{ id: 101, score: 3 }, { id: 102, score: 2 }, { id: 103, score: 3 }]);
    });
});
