// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];




var openedCards = [];


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/*  if all cards have matched, display a message with the final score!!*/

var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
};

// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};


for (var i = 0; i < cards.length; i++){
    var card = cards[i];
    card.addEventListener("click", displayCard);
};

var cardFunction = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
};

for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", cardFunction);
}


/* set up the event listener for a card. */ 

 cards.onclick = function(event){
     this.classList.toggle('open');
     this.classList.toggle('show');

 } 
