// Psudo Code for the logic of this problem. 

// We land on a start page with a Title, Description, Start Button
// create event for when start button is pressed
var startDiv = document.querySelector("#start-page");
startDiv.setAttribute("style", "text-align: center");

var title = document.createElement("h1");
title.textContent = "JavaScript Basics Quiz";
title.setAttribute("style", "text-align: center; font-size: 3em; font-weight: bold");

var description = document.createElement("p");
description.setAttribute("id", "start-text");
description.textContent = "This is a description of the quiz. If you get one wrong, blah blah blah... It will keep your score at the end of the game. Good Luck!";
description.setAttribute("style", "text-align: center; font-size: 12px; font-weight: normal");

var startButton = document.createElement("button");
startButton.setAttribute("id", "start")
startButton.textContent = "Start Quiz!";
// Snagged these styles from the previous project
// TODO: Style this differently. 
startButton.setAttribute("style", "border: none; background-color: #5F43F7; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); display: inline-block; font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;")
startButton.addEventListener("mouseover", function () {
    startButton.style.boxShadow = "0 8px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
})
startButton.addEventListener("mouseout", function () {
    startButton.style.boxShadow = "";
});


startDiv.appendChild(title);
startDiv.appendChild(description);
startDiv.appendChild(startButton);


var topBarSpacing = document.querySelector(".time-header");
topBarSpacing.setAttribute("style", "display: flex; justify-content: space-between");

var highScoreBtn = document.createElement("button");
highScoreBtn.setAttribute("id", "high-score-page");
highScoreBtn.setAttribute("style", "margin: 16px; cursor: pointer; border: none; background-color: #5F43F7; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);")
highScoreBtn.textContent = "High Scores";
highScoreBtn.addEventListener("mouseover", function () {
    highScoreBtn.style.boxShadow = "0 8px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
})
highScoreBtn.addEventListener("mouseout", function () {
    highScoreBtn.style.boxShadow = "";
});
highScoreBtn.addEventListener("click", function () {
    window.location.href = "highscore.html";
});

topBarSpacing.appendChild(highScoreBtn);



// Timer and Button Logic
var timer = document.querySelector('#timer');
var startBtn = document.querySelector('#start');
var startText = document.querySelector('#start-page');
var questionContainer = document.querySelector('#quiz');

// the timer goes to 75
let time = 75;
// This is the button press events. Sets the display of the start-page section to hidden
// sets the question container page to visible. 

var timerInterval;

function checkTimeAndShowScore() {
    if (time <= 0) {
        clearInterval(timerInterval);
        showScorePage();
    }
}

// This is the function that runs after the quiz
// This will start the score section.
function showScorePage() {
    // debugger
    var quizSection = document.getElementById("quiz");
    var scoreSection = document.getElementById("score");

    clearInterval(timerInterval);
    var scoreHeading = document.createElement("h2");
    scoreHeading.textContent = "All Done!";
    scoreSection.appendChild(scoreHeading);

    var userTime = time;
    var timeDisplay = document.createElement("p");
    timeDisplay.textContent = "Your Time: " + userTime + " seconds";
    scoreSection.appendChild(timeDisplay);

    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter Your Name");

    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", function () {
        var userName = nameInput.value;
        var userTime = time;
        storeScore(userName, userTime);

        window.location.href = "highscore.html";
        // displayHighScores();
    });

    scoreSection.appendChild(nameInput);
    scoreSection.appendChild(submitButton);

    var timeHeader = document.querySelector(".time-header")
    // Hides quiz section and shows Score page
    quizSection.classList.add("hidden");
    quizSection.setAttribute("style", "display: none");
    scoreSection.classList.remove("hidden");
    quizSection.innerHTML = "";
    timeHeader.classList.add("hidden");
    timeHeader.setAttribute("style", "display: none");

}

// This is the Function that will store the score and name in local storage
function storeScore(userName, userTime) {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    var newScore = {
        name: userName,
        time: userTime
    };
    highScores.push(newScore);
    highScores.sort(function (b, a) {
        return a.time - b.time;
    });

    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// This is the function that will start the quiz when the user hits the startBtn
startBtn.addEventListener("click", function () {
    startText.classList.add("hidden")

    questionContainer.classList.remove("hidden")
    questionContainer.setAttribute("style", "text-align: center; margin: auto; display: flex; flex-direction: column; align-items: center;");

    timer.textContent = time;
    timerInterval = setInterval(function () {
        time--;
        timer.textContent = time;

        checkTimeAndShowScore();
        // if (time <= 0) {
        //     clearInterval(timerInterval);
        // }
    }, 1000)

    displayQuestion();
})


// question text is displayed with 4 multiple choice answers, this will be pulled from an array
var storedQuestions = JSON.parse(localStorage.getItem("questions"));
var questionIndex = 0;

var questionContainer = document.getElementById("quiz");

function displayQuestion() {

    questionContainer.innerHTML = "";

    // Creates the question
    var desiredQuestion = storedQuestions[questionIndex].question;
    var prompt = document.createElement("h3")
    prompt.textContent = desiredQuestion;
    prompt.setAttribute("style", "text-align: center");
    prompt.setAttribute("id", "quiz");
    questionContainer.appendChild(prompt);

    // If the user selects the correct answer, we move to the next question. 
    // if the user selects the incorrect question the time is dedcuted 15 seconds and we move to the next question. 
    // Loop this for the length of the array of questions.  5 Questions?

    // This function checks if the correct answer was selected, if not it subtracts 10 seconds. 
    // Once the last question is selected, it starts the function for showing the score page. 

    // Creates the multiple choice answer buttons
    // for (var i = 0; i < answers.length; i++) {

    //     var answerButton = document.createElement("button");
    //     answerButton.classList.add("question-button");
    //     answerButton.textContent = answers[i];

    //     answerButton.addEventListener("click", handleButtonClick);


    //     questionContainer.appendChild(answerButton);
    // }

    function handleButtonClick() {
        console.log("handleButtonClick called");
        var correctIndex = storedQuestions[questionIndex].correctIndex;

        // TODO: Add a notificaton for correct or incorrect respopnse. 
        if (this.textContent !== storedQuestions[questionIndex].choices[correctIndex]) {
            time -= 10;
        }

        if (questionIndex < storedQuestions.length - 1) {
            questionIndex++;
            displayQuestion();
        } else {
            clearInterval(timerInterval);
            showScorePage();
            console.log("Quiz completed!");
        }
    }



    // This is the function that runs after the quiz
    // This will start the score section.
    // function showScorePage() {
    //     // debugger
    //     var quizSection = document.getElementById("quiz");
    //     var scoreSection = document.getElementById("score");

    //     clearInterval(timerInterval);
    //     var scoreHeading = document.createElement("h2");
    //     scoreHeading.textContent = "All Done!";
    //     scoreSection.appendChild(scoreHeading);

    //     var userTime = time;
    //     var timeDisplay = document.createElement("p");
    //     timeDisplay.textContent = "Your Time: " + userTime + " seconds";
    //     scoreSection.appendChild(timeDisplay);

    //     var nameInput = document.createElement("input");
    //     nameInput.setAttribute("type", "text");
    //     nameInput.setAttribute("placeholder", "Enter Your Name");

    //     var submitButton = document.createElement("button");
    //     submitButton.textContent = "Submit";
    //     submitButton.addEventListener("click", function () {
    //         var userName = nameInput.value;
    //         var userTime = time;
    //         storeScore(userName, userTime);

    //         displayHighScores();
    //     });

    //     scoreSection.appendChild(nameInput);
    //     scoreSection.appendChild(submitButton);

    //     // Hides quiz section and shows Score page
    //     quizSection.classList.add("hidden");
    //     quizSection.setAttribute("style", "display: none");
    //     scoreSection.classList.remove("hidden");
    //     quizSection.innerHTML = "";
    //     timeHeader.classList.add("hidden");

    // }

    // var timeHeader = document.querySelector(".time-header")

    // function storeScore(userName, userTime) {
    //     var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    //     var newScore = {
    //         name: userName,
    //         time: userTime
    //     };
    //     highScores.push(newScore);
    //     highScores.sort(function (a, b) {
    //         return a.time - b.time;
    //     });

    //     localStorage.setItem("highScores", JSON.stringify(highScores));
    // }

    // function displayHighScores() {
    //     var highScores = JSON.parse(localStorage.getItem("scores")) || [];
    //     console.log(highScores);
    // }

    var answers = storedQuestions[questionIndex].choices;

    // Creates the multiple choice answer buttons
    for (var i = 0; i < answers.length; i++) {

        var answerButton = document.createElement("button");
        answerButton.classList.add("question-button");
        answerButton.textContent = answers[i];

        answerButton.addEventListener("click", handleButtonClick);


        questionContainer.appendChild(answerButton);
    }

}



// When all questions have been asnwered, the score/time is recorded and we move to the scoreboard screen. 
// The user is prompted to put in their Initials. 
// The users Initials and Score are dispalyed in a score board. 
// We will store this value of initials and score in the local storage so when the page is reloaded, the scoreboard stays the same. 

