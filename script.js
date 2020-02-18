window.onload = function(){

    var currentScore = 0; // number of card turns

    var cardBG = [ // class names to be used for card BGs and pair checking
        'l', 'l',
        'll', 'll',
        'lll', 'lll', 
        'llll', 'llll',
        'lllll', 'lllll',
        'llllll', 'llllll',
        'lllllll', 'lllllll',
        'llllllll', 'llllllll'
    ]

    var cards = document.querySelectorAll('.game-card-inner');

    function shuffleCards(){
        for(let i = cards.length - 1; i > 0; i--){ // shuffle array with class names
            let j = Math.floor(Math.random() * i);
            let temp = cardBG[i];
            cardBG[i] = cardBG[j];
            cardBG[j] = temp;
        }
        for(let i = 0; i < cards.length; i++){ // apply randomized class name to each card
            cards[i].classList.add(cardBG[i]);
        }

    }   

    shuffleCards();
    

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

}