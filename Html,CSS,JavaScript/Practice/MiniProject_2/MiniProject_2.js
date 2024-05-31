let firstCard,secondCard,cardNum,sum;

let message;
let isAlive = true;

let resultMessage = document.getElementById("message");
let pageSum = document.getElementById("sum");
let cards = document.getElementById("cards");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(){
    firstCard = getRandomInt(2,11);
    secondCard = getRandomInt(2,11);
    cardNum = firstCard + " " + secondCard;
    sum = firstCard + secondCard;
    showGame();
    if(isAlive === false){
        cards.textContent = "Cards : " + cardNum;
        isAlive = true;
    }
}



function showGame(){
    if(sum < 21){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "You have got the BlackJack!";
        isAlive = false;
    }else{
        message = "You're out of the game. Game Over";
        isAlive = false;
    }
    resultMessage.textContent = message;
    pageSum.textContent = "Sum : " + sum;
    cards.textContent += " "+ cardNum;
}

function newCard () {
    if(isAlive){
    cardNum = getRandomInt(2,11);
    sum += cardNum;
    showGame();
    }
}
