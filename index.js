let questionCard = document.getElementById('question-state')
let submittedCard = document.getElementById('submitted-state')

const btnElScore = document.querySelectorAll(".feedback-scr-btn");
const selectedScoreEl = document.querySelector("#selected-score");
const submitBtn = document.querySelector(".submit-btn");

document.querySelector(".submit-btn").addEventListener('click', updateCard)

let score = ""

btnElScore.forEach(btnEl => {
  btnEl.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    btnEl.classList.add('active');
    score = btnEl.innerText
  });
});

function updateCard() {
  if (score != "") {
    document.querySelector('#submitted-state').style.display = "flex";
    selectedScoreEl.innerText = `You selected ${score} out of 5`
    document.querySelector('#question-state').style.display = "none";
  }
}
