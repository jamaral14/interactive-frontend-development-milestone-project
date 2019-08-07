/* cards array holds all cards */

var cards = document.getElementsByClassName('card');



var cardFunction = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
};

for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", cardFunction);
}


function shuffle(array) {


    return array; 
}

/* set up the event listener for a card. */ 

 cards.onclick = function(event){
     this.classList.toggle('open');
     this.classList.toggle('show');

 } 
