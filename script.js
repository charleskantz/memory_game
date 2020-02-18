window.onload = function(){

    // CARD SHUFFLING

    var currentScore = 0; // number of card turns
    var cardBG = [ // class names to be used for card BGs and pair checking
        'l', 'l',
        'll', 'll', // each class appears twice so the match can occur
        'lll', 'lll', 
        'llll', 'llll',
        'lllll', 'lllll',
        'llllll', 'llllll',
        'lllllll', 'lllllll',
        'llllllll', 'llllllll'
    ];
    var cards = document.querySelectorAll('.game-card-inner'); // collect all blank cards

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
    
    // CARD FLIPPING

    var cardsFlipped = 0;
    var cardOne, cardTwo;

    var gameArea = document.querySelector('.game-container'); 
    gameArea.addEventListener('click', function(e){    // listen for clicks on cards
        if(e.target.className === 'game-card' || e.target.className === 'game-card is-flipped'){
            e.target.classList.toggle('is-flipped'); // activate the card flip
            countScore();
            cardsFlipped++; // count to determine if 1 or 2 cards have been flipped
            e.target.style.pointerEvents = 'none';
            if(cardsFlipped === 1){
                e.target.setAttribute("id", "card-one");
                cardOne = document.querySelector('#card-one').firstChild; // store card info for later comparison
            }
            if(cardsFlipped === 2){
                e.target.setAttribute("id", "card-two");
                cardTwo = document.querySelector('#card-two').firstChild;
                if(cardOne.className === cardTwo.className){
                    console.log('match!');
                    cardOne.parentElement.removeAttribute('id');
                    cardTwo.parentElement.removeAttribute('id');
                    cardsFlipped = 0;
                } else {
                    setTimeout(function(){
                        cardOne.parentElement.classList.toggle('is-flipped');
                        cardTwo.parentElement.classList.toggle('is-flipped');
                        cardOne.parentElement.style.pointerEvents = 'auto';
                        cardTwo.parentElement.style.pointerEvents = 'auto';
                        cardsFlipped = 0;
                        cardOne.parentElement.removeAttribute('id');
                        cardTwo.parentElement.removeAttribute('id');
                    }, 1000);
                        
                }
            }
        }
    });

    function countScore(){
        var score = document.querySelector('.header-score-score'); // update score with new click
        currentScore++;
        score.innerHTML = currentScore;
    }

}
