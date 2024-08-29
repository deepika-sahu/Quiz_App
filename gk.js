const questions = {
    children: [
        { question: "Which Hindu festival is celebrated to honor the bond between brothers and sisters?", options: ["Raksha Bandhan","Diwali","Holi","Makar Sankranti"], answer: "Raksha Bandhan" },
        { question: "Jagannath temple is located in which city?", options: ["Hydrabaad", "Tripura", "Odisha", "Andhra Pradesh"], answer: "Odisha" },
        { question: "Who was the second Prime Minister of India?", options: ["Gulzarilal Nanda" , "Indira Gandhi" , "Lal Bahadur Shastri" 
            , "Rajendra Prasad"], answer: "Lal Bahadur Shastri" },
            { question: "What is a house made of snow called?", options: ["Igloo","Chalet","Hut","Cabin"], answer: "Igloo" },
            { question: "Who designed the national flag of India?", options: ["Bhagat Singh","Jawaharlal Nehru","Pingali Venkayya","Mahatma Gandhi"], answer: "Pingali Venkayya" },
            { question: "What is the largest ocean in the world?", options: ["Atlantic Ocean","Indian Ocean","Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
            { question: "Which animal is called the ship of the desert?", options: ["Camel","Elephant","Horse","Donkey"], answer: "Camel" },
            { question: "Which festival is called the festival of colors?", options: ["Diwali","Holi","Eid","Christmas"], answer: "Holi" },
            { question: "How many sides are there in a triangle?", options: ["Two","Three","Four","Five"], answer: "Three" },
            { question: "What is the world's densest forest?", options: ["Amazon Rainforest","Congo Rainforest","Daintree Rainforest","Black Forest"], answer: "Amazon Rainforest" },
        // Add more questions for children
    ],
    teens: [
        { question: "Who is known as the Father of Computers?", options: ["Charles Babbage","Bill Gates","Steve Jobs"], answer: "Charles Babbage" },
        { question: "Which is the tallest mountain in the world?", options: ["Mount Everest","Mount Kilimanjaro","Mount Fuji"], answer: "Mount Everest" },
        { question: "Which river is the longest in the world?", options: ["Nile","Yangtze","Mississippi"], answer: "Nile" },
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh","Leonardo da Vinci","Pablo Picasso"], answer: "Leonardo da Vinci" },
        { question: "Which country is known as the Land of the Rising Sun", options: ["Japan","South Korea","India"], answer: "Japan" },
        { question: "Which vitamin is known as the sunshine vitamin?", options: ["Vitamin B","Vitamin C","Vitamin D"], answer: "Vitamin D" },
        { question: "Who is also known as the Iron Man of India?", options: ["Lal Bahadur Shastri", "Murli Manohar Joshi" ,"Sardar Vallabhbhai Patel,Subhash Chandra Bose"], answer: "Sardar Vallabhbhai Patel" },
        { question: "Which country is famous for the Eiffel Tower?", options: ["Italy","Germany","France"], answer: "France" },
        { question: "Who was the first man to walk on the moon?", options: ["Neil Armstrong","Buzz Aldrin","Michael Collins"], answer: "Neil Armstrong" },
        { question: "What is the longest bone in the human body?", options: ["Tibia","Femur","Humerus"], answer: "Famur" },

        // Add more questions for teens
    ],
    adults: [
        { question: "Which country is the largest by land area?", options: ["United States","China","Russia"], answer: "Russia" },
        { question: "Who was the 16th President of the United States?", options: ["Abraham Lincoln", "George Washington", "Theodore Roosevelt", "John F. Kennedy"], answer: "Abraham Lincoln" },
        { question: "What is the official language of Brazil", options: ["Spanish","Portuguese","French"], answer: "Portuguese" },
        { question: "Which city is known as the City of Lights?", options: ["Rome","New York","Paris"], answer: "Paris" },
        { question: "Which country is famous for the invention of the pizza??", options: [" Greece","Italy","Bharat"], answer: "Italy" },
        { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie","Rosalind Franklin","Ada Lovelace"], answer: "Marie Curie" },
        { question: "Which river is the longest in Bharat?", options: ["Ganga River","Yamuna","Khaarun river"], answer: "Ganga river" },
        { question: "What is the currency of Japan?", options: ["Won","Yen","Ringgit"], answer: "Yen" },
        { question: "Which country has the most number of islands?", options: ["Sweden","Canada","Indonesia"], answer: "Canada" },
        { question: "Which river is the longest in Africa?", options: [" Congo River","Zambezi River","Nile River"], answer: "Nile River" },
        // Add more questions for adults
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
            // // resultElement.innerHTML = '<span>Quiz Finished!</span>';
            // winSound.play(); // Play win sound at the end of quiz
            // displayFinalScore();
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
    

    // function updateProgress(totalQuestions) {
    //     completedQuestionsElement.textContent = `Completed: ${currentQuestionIndex}`;
    //     remainingQuestionsElement.textContent = `Remaining: ${totalQuestions - currentQuestionIndex - 1}`;
    // }
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
        const restartButton = document.getElementById('restart-btn');

        document.getElementById('question-container').style.display = 'none'; // Hide question container
        messageContainer.style.display = 'block'; // Show message container

        if (percentageScore >= 80) {
            congratulationMessage.style.display = 'block'; // Show congratulatory message
            winSound.play();
            appreciationMessage.style.display = 'none'; // Hide appreciation message
            

        } else {
            congratulationMessage.style.display = 'none'; // Hide congratulatory message
            appreciationMessage.style.display = 'block'; // Show appreciation message
        }
        restartButton.addEventListener('click', () => {
            document.getElementById('age-selection').style.display = 'block'; // Show age selection
            messageContainer.style.display = 'none'; // Hide message container
        });


    }
});

