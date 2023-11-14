// This will be the Array of questions with correct answers

var questions = [
    {
        question: "Which built-in method returns the length of a string in JavaScript?",
        choices: [
            "length()",
            "size()",
            "count()",
            "charAt()",
        ],
        correctIndex: 0,
    },
    {
        question: "How do you comment in JavaScript?",
        choices: [
            "# This is a comment",
            "/ This is a comment /",
            "<!-- This is a comment -->",
            "// This is a comment",
        ],
        correctIndex: 3,
    },
    {
        question: "What does the 'DOM' stand for?",
        choices: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Object Model",
            "Document Oriented Model",
        ],
        correctIndex: 1,
    },
    {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        choices: [
            "To handle events like clicks or keypresses",
            "To create a new HTML element",
            "To add styles to a webpage",
            "To define a JavaScript function",
        ],
        correctIndex: 0,
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        choices: [
            "==",
            "===",
            "!=",
            "!==",
        ],
        correctIndex: 1,
    },
]

localStorage.setItem("questions", JSON.stringify(questions));