const questions = {
    children: [
        { question: "What is a computer mouse used for?", options: ["Eating", "Moving the cursor", "Sleeping", "Dancing"], answer: "Moving the cursor" },
        { question: "Which of these is a common web browser?", options: ["Microsoft Word", "Google Chrome", "Adobe Photoshop", "Excel"], answer: "Google Chrome" },
        { question: "What does a keyboard help you to do?", options: ["Sing", "Write text", "Cook food", "Paint"], answer: "Write text" },
        { question: "What do you call the main screen of a computer?", options: ["Desktop", "Cupboard", "Table", "Bed"], answer: "Desktop" },
        { question: "Which company makes the iPhone?", options: ["Apple", "Samsung", "Sony", "Microsoft"], answer: "Apple" },
        { question: "What is the function of a printer?", options: ["To print documents", "To cook food", "To clean the house", "To play games"], answer: "To print documents" },
        { question: "What do you use to browse the internet?", options: ["Television", "Web browser", "Radio", "Refrigerator"], answer: "Web browser" },
        { question: "Which device is used to watch videos online?", options: ["Television", "Washing machine", "Computer", "Fan"], answer: "Computer" },
        { question: "What is a website?", options: ["A place to buy food", "A location on the internet", "A type of game", "A school subject"], answer: "A location on the internet" },
        { question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Random Location", "Uniform Random Locator", "Universal Resource Link"], answer: "Uniform Resource Locator" }
    ],
    teens: [
        { question: "What is the main function of an operating system?", options: ["To manage hardware and software resources", "To create graphics", "To play games", "To cook meals"], answer: "To manage hardware and software resources" },
        { question: "Which programming language is commonly used for web development?", options: ["Python", "JavaScript", "Swift", "Java"], answer: "JavaScript" },
        { question: "What does 'HTTP' stand for in a web address?", options: ["Hypertext Transfer Protocol", "Hypertext Transfer Process", "Hyperlink Transfer Protocol", "Hypertext Technical Protocol"], answer: "Hypertext Transfer Protocol" },
        { question: "What is the primary function of a CPU in a computer?", options: ["To process instructions", "To store data", "To display images", "To connect to the internet"], answer: "To process instructions" },
        { question: "Which company developed the Android operating system?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: "Google" },
        { question: "What is 'cloud computing'?", options: ["Storing and accessing data over the internet", "A type of computer virus", "A way to cook food", "A type of software"], answer: "Storing and accessing data over the internet" },
        { question: "Which software is commonly used for graphic design?", options: ["Microsoft Word", "Adobe Photoshop", "Excel", "PowerPoint"], answer: "Adobe Photoshop" },
        { question: "What is the purpose of a firewall in computer security?", options: ["To block unauthorized access", "To increase internet speed", "To improve graphics", "To clean the computer"], answer: "To block unauthorized access" },
        { question: "What is a 'URL'?", options: ["A Uniform Resource Locator", "A Unique Resource Locator", "A Universal Resource Link", "A Universal Resource Locator"], answer: "A Uniform Resource Locator" },
        { question: "Which language is used for web page styling?", options: ["HTML", "CSS", "Python", "SQL"], answer: "CSS" }
    ],
    adults: [
        { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Fe", "Hg"], answer: "Au" },
        { question: "Who was the 16th President of the United States?", options: ["Abraham Lincoln", "George Washington", "Theodore Roosevelt", "John F. Kennedy"], answer: "Abraham Lincoln" },
        { question: "What is the capital city of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Brisbane"], answer: "Canberra" },
        { question: "In which year did World War II end?", options: ["1945", "1939", "1950", "1965"], answer: "1945" },
        { question: "What is the name of the theory proposed by Albert Einstein regarding the relationship between space and time?", options: ["Theory of Relativity", "Theory of Evolution", "Theory of Everything", "Quantum Theory"], answer: "Theory of Relativity" },
        { question: "Which company is known for its 'Windows' operating system?", options: ["Apple", "Google", "Microsoft", "IBM"], answer: "Microsoft" },
        { question: "What is the primary purpose of the 'DNS' system?", options: ["To resolve domain names to IP addresses", "To secure networks", "To manage databases", "To design websites"], answer: "To resolve domain names to IP addresses" },
        { question: "What does 'SQL' stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], answer: "Structured Query Language" },
        { question: "What is the purpose of a 'VPN'?", options: ["To secure internet connections", "To increase internet speed", "To clean viruses", "To store data"], answer: "To secure internet connections" },
        { question: "Which of these is a type of database management system?", options: ["MySQL", "Photoshop", "Excel", "PowerPoint"], answer: "MySQL" }
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

document.addEventListener('DOMContentLoaded', () => {
    // Your existing JavaScript code

    // Back Button Functionality
    document.getElementById('back-btn').addEventListener('click', function() {
        window.location.href = 'category.html';
    });

    // Rest of your JavaScript code
});
