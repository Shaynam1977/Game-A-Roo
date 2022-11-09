var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var timer= document.getElementById('timer')
var startScreen= document.getElementById('startScreen')
var startButton= document.getElementById('start-button')
var quizContainer= document.getElementById('quiz-container')
var questiontitle= document.getElementById('question')
var answerList= document.getElementById('answerList')
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
        clearInterval(timerState)
    }
}

//start quiz function to run timer, hide start screen and unhide questions
function startQuiz(){
    timerState= setInterval(intervale, 1000)
    startScreen.setAttribute("class", "hide")
    quizContainer.removeAttribute("class", "hide")
    //run display function question 
    displayQuestion()
}
//display question title and answer choices based on current question index
function displayQuestion(){
    var displayQuestion= questionBank[questionIndex]
    questiontitle.textContent= displayQuestion.question
    answerList.innerHTML= ""
displayQuestion.option.forEach(function(option){
    var choiceButton= document.createElement("button")
    choiceButton.textContent= option
    choiceButton.setAttribute("value", option)
//apply click avent to evaluate button value agains correct answer
    choiceButton.onclick= checkAnswer
    answerList.append(choiceButton)
})

}

function checkAnswer(){
    if (this.value===questionBank[questionIndex].answer)
    {console.log("correct")}
    else{console.log("incorrect")
}//subtract from second left to penalize user if they are incorrect test timer 
//content to match second left
    questionIndex++
    if(questionIndex===questionBank){
        //run end quiz function here
    } else{
        displayQuestion()
    }

function checkAnswer(){
    var answerBank= document.getElementById('answerList')
    var answers= document.getElementById('answers')
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list)
    }
}

//calculate score
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
        {
            score= score+1
            document.getElementById(e.id).style.background= 'purple';
        }
            else{
                document.getElementById(e.id).style.background= 'charcole';
            }
        }

}


//end quiz function that clears time interval, hides the quiz container div,
//unhides the final score div, sets vlaue of score view to secondLeft, 
//function to take in initials and put value and when click submit vlaue 
//saved to local stotage
//grab list of initals and saved scores from local storage and display on screen
//as a high score table



startButton.onclick= startQuiz