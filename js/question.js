//Questions 

const questions = [{
    question: 'مين حبيب بابا؟',
    answers: ['باسل', 'فادي', 'الوادية', 'أنا'],
    answer: 'أنا',
}, 
{
    question: 'مين روح بابا؟',
    answers: ['علي', 'سامي', 'أنا', 'كاكاشي'],
    answer: 'أنا',
},
{
    question: 'مين لما تكح يترعب؟',
    answers: ["محمد عبد الهادي", "لينا", "رغد", "باااابا"],
    answer: "باااابا",
},
{
    question: 'علشان خاطر مين بابا يخاطر يتعب 100 سنة؟',
    answers: ["سيف", "أنا", "البعاليش", "حماد"],
    answer: "أنا",
},
{
    question: 'مين اللي نازل كع و شال عشانكوا الهم مين؟',
    answers: ["عبدالله", "صافي", "باااابا", "اسحق"],
    answer: "باااابا",
}];

//Add Data to local Storage
localStorage.setItem('questions', JSON.stringify(questions));

//Veriables 
let score = 0; //score 
let index = 0; //index

initGame(); 
//Initialize the game
function initGame() {
    const setOfQuestions = JSON.parse(localStorage.getItem('questions'));
    console.log(setOfQuestions)
    displayQuestions(setOfQuestions[index]);
}


// Display Questions
function displayQuestions(question) {
    if (index < 5) {
        document.getElementById('questionName').innerText = question.question;

        for (let i = 0; i < question.answers.length; i++) {
            document.getElementsByTagName('label')[i].innerHTML = question.answers[i];
            document.getElementsByName('answer')[i].setAttribute('value', question.answers[i]);
        }

        //Get the users answer and Icrease the score if correct
        let usersAnswer = document.querySelector('input[name="answer"]:checked');
        console.log(usersAnswer.value == question.answer);
        if (usersAnswer.value == question.answer) {
            score += 1;
        }



        //Get next question

        document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
    } else {
        alert('You got ' + score + ' out of 4');
    }
}


//Get Next Question
function nextQuestion() {
    index += 1;
    displayQuestions(questions[index]);
}


