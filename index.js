const quizData = [
    {
    question : "Le symbole de la tension électrique :",
    a : "R",
    b : "U",
    c : "I",
    d : "P",
    correct : "b"
},
{
    question : "Le symbole de la Résistance électrique :",
    a : "R",
    b : "U",
    c : "I",
    d : "P",
    correct : "a"
},
{
    question : "Le symbole de la puissance électrique :",
    a : "R",
    b : "U",
    c : "I",
    d : "P",
    correct : "d"
},
{
    question : "Le symbole de l'intensité du courant :",
    a : "R",
    b : "U",
    c : "I",
    d : "P",
    correct : "c"
},
{
    question : "La loi d'Ohm s'écrit comme suivant :",
    a : "R = U x I",
    b : "U = R x I",
    c : "I = R x U",
    d : "U = R + I",
    correct : "b"
}
]


const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const resultatFinal = document.getElementById("resultat");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuestion = 0;
let  score = 0;

loadQuiz();

function loadQuiz() {
    deselectedAnswers()
    const currentQuizData = quizData[currentQuestion];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
     //currentQuestion++;
} 
function getSelected(){
    // const answerEls = document.querySelectorAll("answer");

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectedAnswers(){
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}

submitBtn.addEventListener("click" , () =>  {
    const answer = getSelected();     

    if(answer){
      if(answer === quizData[currentQuestion].correct)
      {
          score++;
      }
      currentQuestion++;  
        if(currentQuestion < quizData.length){ 
            loadQuiz();
        
        }
        else  {

            resultatFinal.innerHTML = "<h1> Ton résultat est : " + score + "/5" + "</h1>" ;
            //alert("tu a fini le questionnaire");

        }
    }

    
});
