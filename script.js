var currentScore = 0;

var gameArea = document.querySelector('.game-container');
gameArea.addEventListener('click', function(e){
    console.log(e.target.className);
    if(e.target.className === 'game-card' || e.target.className === 'game-card is-flipped'){
        e.target.classList.toggle('is-flipped');
        var score = document.querySelector('.header-score-score');
        currentScore++;
        score.innerHTML = currentScore;
    }
});