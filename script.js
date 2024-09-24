const questions = [
    "What planet is known as the 'Red Planet'?",
    "Who painted the Mona Lisa?",
    "How many continents in the world?"
];

const choicesArray = [
    ["Earth", "Mars", "Jupiter", "Saturn"],
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    ["three", "four", "five", "six"],
];

const correctAnswers = ["Mars", "Da Vinci", "five"];

let currentQuestionIndex = 0;

let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestionIndex];

        for (let i = 1; i <= 4; i++) {
            const btn = document.getElementById(`choice${i}`);
            btn.innerHTML = choicesArray[currentQuestionIndex][i];
            btn.value = choicesArray[currentQuestionIndex][i];
        }

    } else {
        document.getElementById('result').innerHTML = `You scored ${score} / ${questions.length}!`;
        document.getElementById('question').innerHTML = "";
        document.getElementById('choices').innerHTML = "";

        document.getElementById('tryAgain').style.display = "block";
    }
}

function checkAnswer(button) {
    if (button.value === correctAnswers[currentQuestionIndex]) {
        score += 1;
    }
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();

document.getElementById('tryAgain').addEventListener('click', function () {
    window.location.reload();  // This will reload the page
});
