
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