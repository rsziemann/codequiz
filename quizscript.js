const startingMinutes = 2;

let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}

//list of all questions, options, and answers, this is an array of objects

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    option1: "strings",
    option2: "boolean",
    option3: "alert",
    option4: "numbers",
    answer: "3",
  },
  {
    question: "The condition in an if/ else statement is enclosed within ____.",
    option1: "quotes",
    option2: "curly brackets",
    option3: "parentheses",
    option4: "quare brakcets",
    answer: "3",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    option1: "numbers and strings",
    option2: "other arrays",
    option3: "booleans",
    option4: "all of the above",
    answer: "4",
  },
  {
    question:
      "String values must be enclosed wihtin ___when being assigned to variables.",
    option1: "commas",
    option2: "curly brakcets",
    option3: "quotes",
    option4: "parentheses",
    answer: "3",
  },
  {
    question:
      "A very useful too used during development and debuffing for printing content to the debugger is:",
    option1: "JavaScript",
    option2: "terminal/bash",
    option3: "for loops",
    option4: "console.log",
    answer: "4",
  },
];

//var score = 0;

//for loop to move through array

/*for(var i =0;) i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response === questions[i].answer){
        score++;
        alert("correct!");
    } else {
        alert("wrong!"); 
    }
}

// alert at end of quiz

alert("you got " + score + "/" + questions.length); */

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");

var resultCont = document.getElementById("result");

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  console.log(q);

  questionEl.textContent = questionIndex + 1 + "." + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  if (currentQuestion == totQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score: " + score;
    return;
  }
  loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

setInterval(function () {
  updateCountdown();
}, 1000);
