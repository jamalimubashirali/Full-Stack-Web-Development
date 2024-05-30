//Challenge 1
// let myAge = 20

// console.log(myAge)

// Challange 2

// let myAge = 20
// let humanDogRatio = 7 

// let myDogAge = myAge*humanDogRatio

// console.log(myDogAge)

// Challenge 3

// let bonusPoints = 50

// bonusPoints = bonusPoints * 2
// console.log(bonusPoints)
// bonusPoints = bonusPoints / 4
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 70

// console.log(bonusPoints)
// Challenge 4 

// let raceResult =  () => {
//     for(let i = 0; i < 6; i++){
//         console.log(i)
//     }
//     let playerValue = Math.random();
//     if(playerValue < 0.5)
//         return "Player 1 won the race"
//     else
//         return "Player 2 won the race"
// }


// function increment(){
//     for(var i = 0; i < 10; i++){
//         console.log(raceResult())
//     }
// }

// increment()


// Challenge 5

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// let sum = () => {
//     return lap1 + lap2 + lap3;
// }
// console.log(sum())

// Challenge 6

// let lapCount = 0;

// while(lapCount<3){
//     lapCount++;
// }

// console.log(lapCount)

let count = 0;
let peopleCount = 0;
function increment(){
    peopleCount++;
    document.getElementById("count-el").innerText = peopleCount; 
}

let saveText = document.getElementById('saved-el');


document.getElementById("save-btn").onclick = function Save(){
    count++;
    let extension = peopleCount + " - ";
    saveText.textContent += extension
    peopleCount = 0;
    document.getElementById("count-el").innerText = peopleCount;
    
    if(count > 3){
        saveText.textContent = saveText.textContent.slice(0,-16);
        count = 0;
    }


}