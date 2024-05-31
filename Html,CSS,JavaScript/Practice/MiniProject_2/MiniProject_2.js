let firstCard,secondCard,cardNum,sum;
let message;
let isAlive = true;
let resultMessage = document.getElementById("message");
let pageSum = document.getElementById("sum");
let cards = document.getElementById("cards");
let start = true;


function getRandomInt() {
    return Math.floor(Math.random() * 10) + 2;
}

function startGame(){
    if(start){
    firstCard = getRandomInt();
    secondCard = getRandomInt();
    cardNum = firstCard + " " + secondCard;
    sum = firstCard + secondCard;
    showGame();
    start = false;
    }
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
        start = true;
    }else{
        message = "You're out of the game. Game Over";
        isAlive = false;
        start = true;
    }
    resultMessage.textContent = message;
    pageSum.textContent = "Sum : " + sum;
    cards.textContent += " "+ cardNum;
}

function newCard () {
    if(isAlive){
    cardNum = getRandomInt();
    sum += cardNum;
    showGame();
    }
}
