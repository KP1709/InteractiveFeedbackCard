let questionCard = document.getElementById('question-state')
let submittedCard = document.getElementById('submitted-state')

const btnElScore = document.querySelectorAll(".feedback-scr-btn");
const selectedScoreEl = document.querySelector("#selected-score");
const submitBtn = document.querySelector(".submit-btn");

document.querySelector(".submit-btn").addEventListener('click', updateCard)

let score = ""

const hide = el => el.style.setProperty("display", "none");
const show = el => el.style.setProperty("display", "flex");

btnElScore.forEach(btnEl => {
  // If one value (button) is active - remove class and add to new value
  // Enables one value to be selected only
  btnEl.addEventListener('click', () => {
    document.querySelector('.active-rating')?.classList.remove('active-rating');
    btnEl.classList.add('active-rating');
    score = btnEl.innerText
    document.getElementById('invalid-message').style.display = "none"
  });
});

function updateCard() {
  if (score != "") {
    show(submittedCard)
    selectedScoreEl.innerText = `You selected ${score} out of 5`
    hide(questionCard);
  }
  else if (score == ""){
    document.getElementById('invalid-message').style.display = "block"
  }
}
