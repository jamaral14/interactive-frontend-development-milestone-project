let card = document.getElementsByClassName("card"); //cards array holds all cards 
let cards = [...card];

let moves = 0;

let counter = document.querySelector(".moves");

let matchedCard = document.getElementsByClassName("match");

let closeicon = document.querySelector(".close");

let modal = document.getElementById("popup1");


var openedCards = [];

const memoryGame = document.getElementById("memory-card");        //all the cards in the game.

function shuffle(array) {        // https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        currentIndex -= 1; // https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+JSF101+2017_T1/courseware/4cd02de5ab24459ba03f7239d0b12503/6a5608682d5440eeb5c2ac39020e55c8/3?activate_block_id=block-v1%3ACodeInstitute%2BJSF101%2B2017_T1%2Btype%40vertical%2Bblock%40e45fea3a372b40519cbade26d451a6a8
        temporaryValue = array[currentIndex];  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


document.body.onload = startGame();   //The onload event occurs when an object has been loaded



function startGame() {  


    openedCards = [];


    cards = shuffle(cards);

    for (var i = 0; i < cards.length; i++) {
        memoryGame.innerHTML = "";
        [].forEach.call(cards, function(item) {
            memoryGame.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    // reset moves
    moves = 0;
    second = 0;
    minute = 0;
    counter.innerHTML = moves;
    
}

second = 0  ;//reset timer
minute = 0;
var timer = document.querySelector(".timer");
timer.innerHTML = "0 mins 0 secs";
clearInterval(interval);




var displayCard = function() {            // The displayCard function toggles "open", "show" and "disabled" classes. 
    this.classList.toggle("open");        // Card icon show and disables the card when it’s opened.
    this.classList.toggle("show");         
    this.classList.toggle("disabled");    
};


function cardOpen() {                //cardOpenedCards list and check if they macth or not
    openedCards.push(this);
    var len = openedCards.length;
    if (len === 2) {
        moveCounter();
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        }
        else {
            unmatched();
        }
    }
}



function matched(){                 // <-------------------------------------------   This function tells you when cards match
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}



function unmatched() {                     // <-------------------------------------------   This function tells you when cards don't match
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("show", "open", "no-event", "unmatched");
        openedCards[1].classList.remove("show", "open", "no-event", "unmatched");
        enable();
        openedCards = [];
    }, 1100); // time the  cards will be vivible.
}



function disable() {   // disable cards temporarily
    Array.prototype.filter.call(cards, function(card) {  //the filter function returns a subset of the array for each element that returns true.
        card.classList.add('disabled');
    });
}



function enable() {                   //enable cards and disable matched cards
    Array.prototype.filter.call(cards, function(card) {
        card.classList.remove('disabled');
        for (var i = 0; i < matchedCard.length; i++) {
            matchedCard[i].classList.add("disabled");
        }
    });
}



function moveCounter() {    // this function "moveCounter" count player's moves
    moves++;
    counter.innerHTML = moves; //start timer on first click
    if (moves == 1) {
        second = 0;
        minute = 0; // timer set to 0
        startTimer();
    }


    if (moves > 8 && moves < 12) {
        for (i = 0; i < 3; i++) {
            if (i > 1) {

            }
        }
    }
    else if (moves > 13) {
        for (i = 0; i < 3; i++) {
            if (i > 0) {

            }
        }
    }
}



var second = 0,
    minute = 0;
var interval;

function startTimer() {                         // function startTimer display the game timer
    interval = setInterval(function() {
        timer.innerHTML = minute + "mins " + second + "secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            minute = 0;
        }
    }, 1000);
}



function congratulations() {             //congratulations when all the 16 cards match
    if (matchedCard.length == 16) {
        clearInterval(interval);

        

       
        modal.classList.add("show");   // show congratulations 

document.getElementById("totalTime").innerHTML = minute + "mins " + second + "secs" ;



        

        
        closeModal();        //close icon on modal
    }
}


function closeModal() {       // function "closeModal" close icon on modal
    closeicon.addEventListener("click", function(e) {
        modal.classList.remove("show");
        startGame();
    });
}


function playAgain() {    // function playAgain asks for the player's to play Again?
    modal.classList.remove("show");
    startGame();
}


for (var i = 0; i < cards.length; i++) {       //// loop to add event listeners to each card  //https://www.w3schools.com/js/js_loop_for.asp
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click", congratulations);
}
