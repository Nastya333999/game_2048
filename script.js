let game = document.querySelector(".game"); 
let sqw = document.querySelector(".sqw");
let result = document.querySelector(".result");

let allNumbersSqwId = [];
for(let i = 1; i <= 16; i++ ){
    allNumbersSqwId.push(document.getElementById(i.toString()));
}

let values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function getRandonValue (){
    let randomValue =  Math.floor( Math.random() * 100);
    if (randomValue < 90){
        return 2;
    } else {
        return 4;
    }
};

let btnNewGame = document.querySelector("#new_game");

btnNewGame.onclick = newGame;

function displayGameValues (){
    for(let i = 0 ; i < 16; i++){
        if(values[i] === 0){
            allNumbersSqwId[i].innerHTML = "";
        }else{
            allNumbersSqwId[i].innerHTML = values[i].toString();
        }
        
    }
    
}

function getRandomPosition (){
    let arrFilter = []; 
    values.forEach(function(value, index){
        if(value === 0){
            arrFilter.push(index)
        }
    });
    let arrFilterRandomIndex = Math.floor( Math.random() * arrFilter.length);
    let newValueIndex = arrFilter[arrFilterRandomIndex];

    return newValueIndex;
};

function newGame (){
    values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    values[getRandomPosition()] = getRandonValue(); 
    values[getRandomPosition()] = getRandonValue(); 
    displayGameValues();
}






