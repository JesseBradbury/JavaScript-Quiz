// Psudo Code for the logic of this problem. 

// We land on a start page with a Title, Description, Start Button
// create event for when start button is pressed
var startDiv = document.querySelector(".start");
startDiv.setAttribute("style", "text-align: center")

var title = document.createElement("h1");
title.textContent = "JavaScript Basics Quiz";
title.setAttribute("style", "text-align: center; font-size: 3em; font-weight: bold");

var description = document.createElement("p");
description.textContent = "This is a description of the quiz. If you get one wrong, blah blah blah... It will keep your score at the end of the game. Good Luck!";
description.setAttribute("style", "text-align: center; font-size: 12px; font-weight: normal");

var startButton = document.createElement("button");
startButton.textContent = "Start Quiz!";
// Snagged these styles from the previous project
// TODO: Style this differently. 
startButton.setAttribute("style", "border: none; background-color: hsl(360, 91%, 36%); border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); display: inline-block; font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;")

startDiv.appendChild(title);
startDiv.appendChild(description);
startDiv.appendChild(startButton);

// we move to the first quiz question, 
// the timer goes to 75
// question text is displayed with 4 multiple choice answers, this will be pulled from an array
// If the user selects the correct answer, we move to the next question. 
// if the user selects the incorrect question the time is dedcuted 15 seconds and we move to the next question. 
// Loop this for the length of the array of questions.  5 Questions?

// When all questions have been asnwered, the score/time is recorded and we move to the scoreboard screen. 
// The user is prompted to put in their Initials. 
// The users Initials and Score are dispalyed in a score board. 
// We will store this value of initials and score in the local storage so when the page is reloaded, the scoreboard stays the same. 

