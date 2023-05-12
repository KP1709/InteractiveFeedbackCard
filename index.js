const btnElScore = document.querySelectorAll(".feedback-scr-btn");
const selectedScoreEl = document.querySelector("#selected-score");

let score = ""

btnElScore.forEach(btnEl =>{
  btnEl.addEventListener('click', () =>{
    document.querySelector('.active')?.classList.remove('active');
    btnEl.classList.add('active');
    score = btnEl.innerText
    selectedScoreEl.innerText= `You selected ${score} out of 5`  
  });
});
