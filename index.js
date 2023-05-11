const btnElScore = document.querySelectorAll(".feedback-scr-btn");

let score = ""

btnElScore.forEach(btnEl =>{
  btnEl.addEventListener('click', () =>{
    document.querySelector('.active')?.classList.remove('active');
    btnEl.classList.add('active');
    score = btnEl.innerText
    console.log(score)
  });
});
