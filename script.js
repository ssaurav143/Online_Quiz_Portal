let questions = [
["What is a variable in programming?","A storage for data","A type of loop","A function call","A compiler","A storage for data"],
["Which data type is used for whole numbers in Java?","double","float","int","char","int"],
["What does IDE stand for?","Integrated Development Environment","Internal Data Engine","Input Device Engine","Integrated Debug Environment","Integrated Development Environment"],
["Which keyword is used to define a class in Java?","define","class","struct","object","class"],
["Which loop is used when number of iterations is known?","if statement","while loop","do while loop","for loop","for loop"],
["What is the use of break statement?","Continue loop","Exit loop","Start loop","Pause program","Exit loop"],
["Which symbol is used to end a statement in Java?",";",".",":","#",";"],
["What does boolean type store?","True or False","Numbers","Characters","Strings","True or False"],
["Which operator is used for comparison?","-","=","+","==","=="],
["What is an array?","A function","Single variable","Collection of elements","A loop","Collection of elements"]
]

let index = 0
let score = 0
let answers = new Array(questions.length)

function loadQuestion()
{
document.getElementById("question").innerHTML = questions[index][0]

document.getElementById("op1").innerHTML = questions[index][1]
document.getElementById("op2").innerHTML = questions[index][2]
document.getElementById("op3").innerHTML = questions[index][3]
document.getElementById("op4").innerHTML = questions[index][4]

let options = document.getElementsByName("option")

options.forEach((opt)=> opt.checked = false)

if(answers[index] != null)
{
options[answers[index]].checked = true
}
}

function nextQuestion()
{
saveAnswer()
index++

if(index < questions.length)
{
loadQuestion()
}
else
{
calculateScore()
localStorage.setItem("quizScore",score)
window.location="result.html"
}
}

function prevQuestion()
{
if(index > 0)
{
saveAnswer()
index--
loadQuestion()
}
}

function saveAnswer()
{
let options = document.getElementsByName("option")

for(let i=0;i<options.length;i++)
{
if(options[i].checked)
{
answers[index] = i
}
}
}

function calculateScore()
{
score = 0

for(let i=0;i<questions.length;i++)
{
if(answers[i] != null &&
questions[i][answers[i]+1] == questions[i][5])
{
score++
}
}
}