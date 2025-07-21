const questions = [
    {
        question: "What does Article 1 of the Constitution state?",
        answers: [
            { text: "Defines the legislative branch", correct: true },
            { text: "Defines the executive branch", correct: false },
            { text: "Defines the judiciary", correct: false },
            { text: "Defines federalism", correct: false }
        ]
    },
    {
        question: "Which article deals with fundamental rights?",
        answers: [
            { text: "Article 14-32", correct: true },
            { text: "Article 21-30", correct: false },
            { text: "Article 44", correct: false },
            { text: "Article 370", correct: false }
        ]
    },
    {
        question: "What does Article 79 of the Constitution state?",
        answers: [
            { text: "Establishes the Parliament of India", correct: true },
            { text: "Defines fundamental rights", correct: false },
            { text: "Establishes the Supreme Court", correct: false },
            { text: "Establishes the role of the President", correct: false }
        ]
    },
    {
        question: "What are the two houses of the Indian Parliament?",
        answers: [
            { text: "Lok Sabha and Rajya Sabha", correct: true },
            { text: "Legislative Assembly and Legislative Council", correct: false },
            { text: "House of Commons and House of Lords", correct: false },
            { text: "President and Vice President", correct: false }
        ]
    },
    {
        question: "Which Article grants the power to make laws for the entire country?",
        answers: [
            { text: "Article 246", correct: true },
            { text: "Article 226", correct: false },
            { text: "Article 370", correct: false },
            { text: "Article 32", correct: false }
        ]
    },
    {
        question: "What is the term of the Lok Sabha?",
        answers: [
            { text: "5 years", correct: true },
            { text: "6 years", correct: false },
            { text: "3 years", correct: false },
            { text: "Indefinite", correct: false }
        ]
    },
    {
        question: "Who is the presiding officer of the Rajya Sabha?",
        answers: [
            { text: "The Vice President of India", correct: true },
            { text: "The Speaker", correct: false },
            { text: "The President", correct: false },
            { text: "The Prime Minister", correct: false }
        ]
    },
    {
        question: "Which Article allows the Parliament to amend the Constitution?",
        answers: [
            { text: "Article 368", correct: true },
            { text: "Article 370", correct: false },
            { text: "Article 40", correct: false },
            { text: "Article 19", correct: false }
        ]
    },
    {
        question: "Which house of Parliament is known as the 'House of the People'?",
        answers: [
            { text: "Lok Sabha", correct: true },
            { text: "Rajya Sabha", correct: false },
            { text: "Legislative Assembly", correct: false },
            { text: "Legislative Council", correct: false }
        ]
    },
    {
        question: "How often must the Parliament meet in a year?",
        answers: [
            { text: "At least twice a year", correct: true },
            { text: "Once a year", correct: false },
            { text: "Four times a year", correct: false },
            { text: "Every six months", correct: false }
        ]
    }
];


const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex, score;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    scoreContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        button.dataset.correct = answer.correct;
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.classList.add('hide');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) score++;
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.add(button.dataset.correct === 'true' ? 'correct' : 'wrong');
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
    if (currentQuestionIndex + 1 < questions.length) {
        nextButton.innerText = 'Next';
    } else {
        nextButton.innerText = 'Finish';
    }
}

function showScore() {
    questionContainer.classList.add('hide');
    nextButton.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreElement.innerText = `Your score is ${score}/${questions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

startGame();
