let firstCard = 12;
let secondCard = 1;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let massage = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("card-el")





function renderGame() {
sumEl.textContent = "sum : " + sum;
cardsEl.textContent= "cards: " + cards[0] +" "+ cards[];

    if (sum < 21) {
        massage = "Do you want to draw a new card?"
        
} else if(sum === 21){
        massage = "you'va got blackjack";
        hasBlackJack = true;
} else   {
        massage="you are out of the game!"
        isAlive = false;
}
    messageEl.textContent = massage;
}
function startGame() {
        renderGame();
}

function newcard() {
       //console.log("Drawing new card from the deck");
        let card = 9;
        sum += card;
        renderGame();
}