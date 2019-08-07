/* cards array holds all cards */

var card = document.querySelectorAll('.card');
console.log(card);
var cards = document.getElementsByClassName('card');
console.log(cards);

cards.addEventListener("click", function () {
    cards.classList.toggle("open", "show");
});

var cards = [... card];
console.log(cards[12]);

function shuffle(array) {


    return array; 
}

/* set up the event listener for a card. */ 

 cards.onclick = function(event){
     this.classList.toggle('open');
     this.classList.toggle('show');

 } 
