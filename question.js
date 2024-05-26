function Question(questionSentence, answerOptions, correctAnswer) {
    this.questionSentence = questionSentence;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;

}

Question.prototype.checkTheAnswer = function(answer) {
    return answer === this.correctAnswer
}

let questions = [
    new Question("1-Which One is The Javascript Package Management Application?",{a: "Node.js",b: "Typescript",c: "Npm",d: "Nuget"},"c" ),
    new Question("2-Which One is The .Net Package Management Application?",{a: "Node.js",b: "Nuget",c: "Npm"},"b" )
];