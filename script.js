//list of all questions, choices, and answers

var questions = [
  {
    prompt: "commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    prompt: "The conditon in an if/ else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "quare brackets"],
    answer: "parentheses",
  },
  {
    prompt: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    prompt:
      "string values must be enclosed wihtin ___when being assigned to variables.",
    choices: ["commas", "curly brakcets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    prompt:
      "A very useful too used during development and debuffing for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var score = 0;

//for loop to move through array

for(var i =0;) i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response === questions[i].answer){
        score++;
        alert("correct!");
    } else {
        alert("wrong!"); 
    }
}
alert("you got " + score + "/" + questions.length);