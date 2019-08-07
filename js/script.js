/* cards array holds all cards */

var cards = document.getElementsByClassName('card');


cards.addEventListener("click", function () {
    cards.classList.toggle("open", "show");
});

function shuffle(array) {


    return array; 
}

/* set up the event listener for a card. */ 

 cards.onclick = function(event){
     this.classList.toggle('open');
     this.classList.toggle('show');

 } 
