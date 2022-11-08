var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var timer= document.getElementById('timer')
var startScreen= document.getElementById('startScreen')
var startButton= document.getElementById('start-button')
var quizContainer= document.getElementById('quiz-container')
var questiontitle= document.getElementById('question')
var answerList= document.getElementById('aswerlist')
var score= document.getElementById('score')
var scoreTitle= document.getElementById('score-title')
var scoreView= document.getElementById('scoreView')
var nameInput= document.getElementById('nameInput')
var submitName= document.getElementById('submit-name')
var secondLeft= 60
var questionIndex= 0
var timerState;


//Question bank
var questionBank= [
    {
        question : "Inside of which HTML element do we put JavaScript?",
        option : ['script', 'scripting', 'javascript', 'js'],
        answer : 'Script'
    },
    {
        question : "What is the correct syntax for referring to an external script called 'xxx.js'?",
        option : ['script herf="xxx.js"','script name="xxx.js"', 'scrpit scr="xxx.js"','simon and garfunkel'],
        answer : 'script src="xxx.js'
    },
    {
        question : "The JavaScript file must contain the <script> tag",
        option : ['True','False','Maybe','IDK'],
        answer : 'True'
    },
    {
        question : "How do you create a function in JavaScript?",
        option : ['function:myFunction()','function = myFunction()','function myFunction()','What is a function anyways?'],
        answer : 'function myFunction()'
    },
    {
        question : "How do you call a function named 'sillyFunction'?",
        option : ['call function sillyFunction()','call sillyFunction()','sillyFunction()','come here sillyFunction()'],
        answer : 'sillyFunction'
    },

    {
        question : "How to write an IF statement in JavaScript?",
        option : ['if i = 5 then','if i = 5','if i == 5 then','if(i == 5)',],
        answer : 'if (i == 5)'
    },

    {
        question : "How does a FOR loop start?",
        option : ['for i =1 to 5','for (i = 0; i <= 5; i++)','for (i = 0; i <= 5)','for (i <= 5; i++)'],
        answer : 'for (i = 0; i <= 5; i++'
    },

    {
        question : "JavaScript is the same as Java?",
        option : ['False','True','IDK','coffee'],
        answer : 'False'
    }
]
//function to define intervale that we want to place in our time function
function intervale(){
    secondLeft= secondLeft-1
    timer.textContent= secondLeft
    if (secondLeft <=0){
        console.log("game over")
    }
}

//start quiz function to run timer, hide start screen and unhide questions
function startQuiz(){
    timerState= setInterval(intervale, 1000)
    startScreen.setAttribute("class", "hide")
    quizContainer.removeAttribute("class", "hide")
    //run display function question 
}

//function displayQuestion()

//showQuestion (question);