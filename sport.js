const questions = {
    children: [{
        question: "What sport is known as 'the beautiful game'?",
        options: ["Basketball", "Football (Soccer)", "Baseball", "Tennis"],
        answer: "Football (Soccer)"
    },
    {
        question: "In which sport do players use a racket to hit a shuttlecock over a net?",
        options: ["Badminton", "Volleyball", "Tennis", "Table Tennis"],
        answer: "Badminton"
    },
    {
        question: "Which animal is often associated with baseball as a mascot?",
        options: ["Tiger", "Eagle", "Bear", "Bat"],
        answer: "Bat"
    },
    {
        question: "What is the name of the sport where players ride horses and try to score goals by hitting a ball with a mallet?",
        options: ["Polo", "Tennis", "Golf", "Croquet"],
        answer: "Polo"
    },
    {
        question: "Which sport involves bouncing a ball on the floor and scoring points by throwing it through a hoop?",
        options: ["Football", "Basketball", "Soccer", "Baseball"],
        answer: "Basketball"
    },
    {
        question: "In which sport do you score points by running around bases?",
        options: ["Cricket", "Soccer", "Baseball", "Golf"],
        answer: "Baseball"
    },
    {
        question: "Which sport uses a small round ball and involves hitting it with a bat to score runs?",
        options: ["Tennis", "Baseball", "Bowling", "Hockey"],
        answer: "Baseball"
    },
    {
        question: "What do you call the sport where players use a stick to hit a small ball into a series of holes on a course?",
        options: ["Tennis", "Golf", "Hockey", "Bowling"],
        answer: "Golf"
    },
    {
        question: "Which sport involves using a surfboard to ride on waves in the ocean?",
        options: ["Sailing", "Surfing", "Rowing", "Diving"],
        answer: "Surfing"
    },
    {
        question: "What is the main goal in the sport of soccer?",
        options: ["To score goals by kicking the ball into the opponent's net", "To run the fastest", "To hit the ball over a net", "To throw the ball into a hoop"],
        answer: "To score goals by kicking the ball into the opponent's net"
    }],
       
        // Add more questions for children
    
    teens: [
        {
            question: "Which NBA team is known for its player, LeBron James?",
            options: ["Los Angeles Lakers", "Golden State Warriors", "Miami Heat", "Chicago Bulls"],
            answer: "Los Angeles Lakers"
        },
        {
            question: "In which sport is the Stanley Cup awarded?",
            options: ["Basketball", "Baseball", "Ice Hockey", "Football"],
            answer: "Ice Hockey"
        },
        {
            question: "Which tennis tournament is played on grass courts and is held annually in Wimbledon?",
            options: ["US Open", "Australian Open", "French Open", "Wimbledon"],
            answer: "Wimbledon"
        },
        {
            question: "Which sport features a competition known as the 'Tour de France'?",
            options: ["Swimming", "Running", "Cycling", "Skiing"],
            answer: "Cycling"
        },
        {
            question: "Who holds the record for the most goals scored in a single World Cup tournament?",
            options: ["Diego Maradona", "Pelé", "Miroslav Klose", "Just Fontaine"],
            answer: "Just Fontaine"
        },
        {
            question: "In which sport is the 'Fastest Man' title often associated with Usain Bolt?",
            options: ["Swimming", "Athletics (Track and Field)", "Cycling", "Gymnastics"],
            answer: "Athletics (Track and Field)"
        },
        {
            question: "Which NFL team is known for its 'Green Bay Packers' name?",
            options: ["Dallas Cowboys", "Green Bay Packers", "New England Patriots", "San Francisco 49ers"],
            answer: "Green Bay Packers"
        },
        {
            question: "In the sport of soccer, what position is known for protecting the goal from the opposing team?",
            options: ["Defender", "Forward", "Midfielder", "Goalkeeper"],
            answer: "Goalkeeper"
        },
        {
            question: "Which sport involves a series of short races and is known for the event called 'The 100 meters'?",
            options: ["Swimming", "Athletics (Track and Field)", "Cycling", "Skiing"],
            answer: "Athletics (Track and Field)"
        },
        {
            question: "Which sport is known for its 'Grand Slam' tournaments: the Australian Open, French Open, Wimbledon, and US Open?",
            options: ["Soccer", "Basketball", "Tennis", "Golf"],
            answer: "Tennis"
        } ],
    
    adults: 
        [
            {
                question: "Which country has won the most FIFA World Cup titles in soccer?",
                options: ["Brazil", "Germany", "Argentina", "Italy"],
                answer: "Brazil"
            },
            {
                question: "What is the name of the prestigious annual golf tournament held at Augusta National Golf Club?",
                options: ["The Masters", "The Open Championship", "US Open", "PGA Championship"],
                answer: "The Masters"
            },
            {
                question: "Which athlete is known for his achievements in swimming and has won a record 23 Olympic gold medals?",
                options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Roger Federer"],
                answer: "Michael Phelps"
            },
            {
                question: "In which sport is the 'Heisman Trophy' awarded?",
                options: ["Basketball", "Baseball", "American Football", "Soccer"],
                answer: "American Football"
            },
            {
                question: "What is the term for a tennis match where a player wins all three sets?",
                options: ["Straight Sets", "Tie-Break", "Grand Slam", "Break Point"],
                answer: "Straight Sets"
            },
            {
                question: "Which country is the birthplace of the sport of cricket?",
                options: ["Australia", "India", "South Africa", "England"],
                answer: "England"
            },
            {
                question: "Which Formula 1 driver is known for his multiple world championships and the name 'The Red Baron'?",
                options: ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Sebastian Vettel"],
                answer: "Michael Schumacher"
            },
            {
                question: "Which annual marathon is known for taking place in Boston and is one of the oldest in the world?",
                options: ["New York City Marathon", "Chicago Marathon", "Boston Marathon", "Berlin Marathon"],
                answer: "Boston Marathon"
            },
            {
                question: "Which team won the NBA Championship in the 2020 season?",
                options: ["Miami Heat", "Los Angeles Lakers", "Golden State Warriors", "Toronto Raptors"],
                answer: "Los Angeles Lakers"
            },
            {
                question: "In which sport would you encounter terms like 'birdie,' 'eagle,' and 'bogey'?",
                options: ["Tennis", "Golf", "Cricket", "Baseball"],
                answer: "Golf"
            }
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

