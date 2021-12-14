let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let massage = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("card-el")

function getRandomCard() {
        let random = Math.floor(Math.random()*10)
        return random;
}


function startGame() {
        renderGame()
}



function renderGame() {

cardsEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] +" "        
        }
        
sumEl.textContent = "sum : " + sum;

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


function newcard() {
       //console.log("Drawing new card from the deck");
        let card = getRandomCard();
         sum += card;
        cards.push(card)
       
        renderGame();
} 