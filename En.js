const questions = {
    children: [
        { question: "What is the plural of 'cat'?", options: ["cats", "catz", "cates", "cat"], answer: "cats" },
        { question: "Which is a verb?", options: ["run", "quick", "green", "big"], answer: "run" },
        { question: "Which is a noun?", options: ["tree", "quickly", "blue", "slow"], answer: "tree" },
        { question: "What is the past tense of 'play'?", options: ["played", "playing", "plays", "play"], answer: "played" },
        { question: "Which of these is an adjective?", options: ["happy", "happily", "happiness", "happier"], answer: "happy" },
        { question: "Which sentence is correct?", options: ["The dogs is running.", "The dogs are running.", "The dogs run.", "The dogs runs."], answer: "The dogs are running." },
        { question: "What is the opposite of 'hot'?", options: ["cold", "warm", "heat", "cool"], answer: "cold" },
        { question: "Which word is spelled correctly?", options: ["appel", "appl", "apple", "aple"], answer: "apple" },
        { question: "Which is a question?", options: ["He is sleeping.", "Is he sleeping?", "He sleeps.", "He was sleeping."], answer: "Is he sleeping?" },
        { question: "What is the correct plural of 'child'?", options: ["childs", "child", "children", "childen"], answer: "children" },
    ],
    teens: [
        { question: "What is the past tense of 'run'?", options: ["running", "runned", "ran", "run"], answer: "ran" },
        { question: "Which sentence is correct?", options: ["He go to school.", "He goes to school.", "He going to school.", "He goed to school."], answer: "He goes to school." },
        { question: "Choose the correct form of the verb: 'She ___ her homework every day.'", options: ["do", "does", "doing", "done"], answer: "does" },
        { question: "Which word is a synonym for 'happy'?", options: ["joyful", "sad", "angry", "upset"], answer: "joyful" },
        { question: "Which is the correct comparative form of 'big'?", options: ["big", "bigger", "biggest", "more big"], answer: "bigger" },
        { question: "What is the correct form of 'to be' for 'I'?", options: ["am", "is", "are", "was"], answer: "am" },
        { question: "Choose the correct sentence:", options: ["They was here.", "They were here.", "They is here.", "They are here."], answer: "They were here." },
        { question: "Which of these is a preposition?", options: ["under", "run", "happy", "cat"], answer: "under" },
        { question: "What is the past participle of 'eat'?", options: ["eated", "ate", "eaten", "eating"], answer: "eaten" },
        { question: "Which of these is an irregular verb?", options: ["run", "jump", "talk", "study"], answer: "run" },
    ],
    adults: [
        { question: "Which word is a synonym for 'happy'?", options: ["joyful", "sad", "angry", "upset"], answer: "joyful" },
        { question: "Identify the adjective in the sentence: 'The quick brown fox jumps over the lazy dog.'", options: ["quick", "fox", "jumps", "over"], answer: "quick" },
        { question: "What is the antonym of 'increase'?", options: ["decrease", "reduce", "enlarge", "expand"], answer: "decrease" },
        { question: "Which of the following is a compound sentence?", options: ["I went to the store, and I bought some milk.", "I went to the store.", "I bought some milk.", "The store was closed."], answer: "I went to the store, and I bought some milk." },
        { question: "What is the meaning of the word 'ubiquitous'?", options: ["rare", "everywhere", "unique", "expensive"], answer: "everywhere" },
        { question: "Choose the correct sentence:", options: ["The meeting was postponed due to the rain.", "The meeting was postpone due to the rain.", "The meeting was postponing due to the rain.", "The meeting was postpone due the rain."], answer: "The meeting was postponed due to the rain." },
        { question: "What is the superlative form of 'good'?", options: ["better", "gooder", "best", "bestest"], answer: "best" },
        { question: "Which sentence uses correct subject-verb agreement?", options: ["He don't like pizza.", "He doesn't like pizza.", "He aren't like pizza.", "He didn't likes pizza."], answer: "He doesn't like pizza." },
        { question: "What is the plural form of 'mouse'?", options: ["mouses", "mouse", "mice", "mices"], answer: "mice" },
        { question: "Which of these is a conjunction?", options: ["and", "jump", "quick", "run"], answer: "and" },
    ]
};


let currentQuestionIndex = 0;
let timer;
let timeLeft = 30; // 30 seconds for each question
let questionsList = [];
let score = 0;


const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('wrong.mp3');
const timesUpSound = new Audio('timeup.mp3');
const winSound = new Audio('win.mp3');



document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const resultElement = document.getElementById('result');
    const completedQuestionsElement = document.getElementById('questions-completed');
    const remainingQuestionsElement = document.getElementById('questions-remaining');
    const timerDisplay = document.getElementById('timer-display');
    const nextButton = document.getElementById('next-btn');
    const ageButtons = document.querySelectorAll('.age-btn');
    const scoreElement = document.createElement('div'); // Score display element
    scoreElement.id = 'score';
    document.getElementById('header').appendChild(scoreElement); // Append score to header
    updateScore();

    ageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const ageGroup = this.getAttribute('data-age-group');
            if (ageGroup && questions[ageGroup]) {
                questionsList = questions[ageGroup];
                startQuiz();
            }
        });
    });

    nextButton.addEventListener('click', () => {
        clearInterval(timer);
        resultElement.innerHTML = '';
        nextButton.style.display = "none";
        currentQuestionIndex++;
        updateProgress(questionsList.length);
        if (currentQuestionIndex < questionsList.length) {
            showQuestion(questionsList[currentQuestionIndex]);
            startTimer();
        } else {
            endQuiz();
        }
    });

    function startQuiz() {
        // Hide age selection after quiz starts
        document.getElementById('age-selection').style.display = 'none';
        document.getElementById('message-container').style.display = 'none'; // Hide message container initially
        document.getElementById('question-container').style.display = 'block'; // Show question container
        currentQuestionIndex = 0;
        score = 0; // Reset score at the start of the quiz
        updateScore();
        updateProgress(questionsList.length);
        showQuestion(questionsList[currentQuestionIndex]);
        startTimer();
    }

    function showQuestion(question) {
        questionElement.textContent = question.question;
        optionsContainer.innerHTML = '';

        question.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
            optionsContainer.appendChild(label);
        });

        // Using `change` event for the options container
        optionsContainer.addEventListener('change', handleOptionChange, { once: true });
    }

    function handleOptionChange() {
        clearInterval(timer);
        const selectedOption = document.querySelector('input[name="option"]:checked');
    
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = questionsList[currentQuestionIndex].answer;
    
            if (userAnswer === correctAnswer) {
                resultElement.innerHTML = '<span class="correct">&#10004; Correct Answer</span>';
                correctSound.play(); // Play correct answer sound
                score += 2; // Increase score by 2 for correct answer
                updateScore();
            } else {
                resultElement.innerHTML = `<span class="incorrect">&#10008; Incorrect Answer. Correct Answer: <strong>${correctAnswer}</strong></span>`;
                incorrectSound.play(); // Play incorrect answer sound
            }
    
            nextButton.style.display = "block"; // Show the Next button
        }
    }

    function updateProgress(totalQuestions) {
        completedQuestionsElement.textContent = `Completed: ${currentQuestionIndex}`;
        const remainingQuestions = Math.max(totalQuestions - currentQuestionIndex - 1, 0);
        remainingQuestionsElement.textContent = `Remaining: ${remainingQuestions}`;
    }
    
    function updateScore() {
        scoreElement.textContent = `Score: ${score}`; // Display the score
    }

    function startTimer() {
        timeLeft = 30; // Reset to 30 seconds for each question
        timerDisplay.textContent = timeLeft;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                resultElement.innerHTML = '<span class="incorrect">Time Up! Moving to next question.</span>';
                timesUpSound.play(); // Play time up sound
                nextButton.style.display = "block"; // Show the Next button
            }
        }, 1000);
    }

    function endQuiz() {
        const totalQuestions = questionsList.length;
        const percentageScore = (score / (totalQuestions * 2)) * 100; // Assuming 2 points per question
        const messageContainer = document.getElementById('message-container');
        const congratulationMessage = document.getElementById('congratulation-message');
        const appreciationMessage = document.getElementById('appreciation-message');
    
        document.getElementById('question-container').style.display = 'none'; // Hide question container
        messageContainer.style.display = 'block'; // Show message container
    
        if (percentageScore >= 80) {
            congratulationMessage.style.display = 'block';
            winSound.play();
            appreciationMessage.style.display = 'none';
        } else {
            congratulationMessage.style.display = 'none';
            appreciationMessage.style.display = 'block';
        }
    
        document.getElementById('restart-btn').addEventListener('click', restartQuiz);
    }
    
    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        updateScore();
    }

    function restartQuiz() {
        document.getElementById('age-selection').style.display = 'block'; // Show age selection
        document.getElementById('message-container').style.display = 'none'; // Hide message container
        resetQuiz(); // Reset quiz settings
    }
});
