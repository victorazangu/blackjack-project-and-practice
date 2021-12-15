
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let massage = ""


let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("card-el")
let player = {
     name : "victor",
     chips : 145  
}


let playerEl = document.getElementById("player-el");
playerEl.textContent=player.name+" : $ "+player.chips

function getRandomCard() {
        let randomNumber = Math.floor(Math.random() * 13) + 1
        if (randomNumber > 10) {
                return 10
        } else if (randomNumber === 1) {
                return 11;
        } else {
                return randomNumber
        }
}

function startGame() {
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
         let randomNumber = Math.floor(Math.random() * 13) + 1
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
      
        if (isAlive === true && hasBlackJack === false) {
          let card = getRandomCard();
          sum += card;
          cards.push(card)
       
           renderGame();
                
        }
} 