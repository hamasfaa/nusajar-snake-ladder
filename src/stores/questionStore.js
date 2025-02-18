import { defineStore } from "pinia";
import QUESTION from "@/config/question.json";

export const useQuestionStore = defineStore("question", {
    state: () => ({
        questions: [],
        currentQuestionIndex: 0,
        currentQuestion: null,
        answered: false,
        correctAnswer: false,
        diceRolled: false,
    }),
    actions: {
        loadQuestions() {
            this.questions = QUESTION.map(q => ({
                question: q.question,
                options: [
                    { key: 'a', value: q.a },
                    { key: 'b', value: q.b },
                    { key: 'c', value: q.c },
                    { key: 'd', value: q.d },
                    { key: 'e', value: q.e }
                ],
                answer: q.answer
            }));
            this.currentQuestionIndex = 0;
            this.currentQuestion = this.questions[this.currentQuestionIndex];
            console.log(this.questions);
        },
        generateQuestion() {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.currentQuestion = this.questions[this.currentQuestionIndex];
                this.answered = false;
                this.correctAnswer = false;
                this.diceRolled = false;
            }
        },
        submitAnswer(selectedAnswer) {
            this.answered = true;
            if (selectedAnswer === this.currentQuestion.answer) {
                this.correctAnswer = true;
            }
        },
        rollDiceButton() {
            this.diceRolled = true;
        }
    },
});