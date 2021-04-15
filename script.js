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

let bottom = document.querySelector('#bottom');
bottom.onclick = moveDown;
let tops = document.querySelector('#tops');
tops.onclick = moveTop;
let right = document.querySelector('#right');
right.onclick = moveRight;
let left = document.querySelector('#left');
left.onclick = moveLeft;

function numersNotZero (num){
    return num > 0;
}

function moveDown (){
    for ( let i = 0; i <4; i++){
        let verticalRow = [values[i], values[i+4], values[i+8], values[i+12]];
        let numbers = verticalRow.filter(numersNotZero); 
        let zeroNumer = 4 - numbers.length; 
        let zerrosArray = Array(zeroNumer).fill(0);
        let correctVerticalRow = zerrosArray.concat(numbers)
        for ( let j = 0 ; j <4; j++){
            values[i+j*4] = correctVerticalRow[j]
        }
    }
    sumColumsButton();
    for ( let i = 0; i <4; i++){
        let verticalRow = [values[i], values[i+4], values[i+8], values[i+12]];
        let numbers = verticalRow.filter(numersNotZero); 
        let zeroNumer = 4 - numbers.length; 
        let zerrosArray = Array(zeroNumer).fill(0);
        let correctVerticalRow = zerrosArray.concat(numbers)
        for ( let j = 0 ; j <4; j++){
            values[i+j*4] = correctVerticalRow[j]
        }
    }
    values[getRandomPosition()] = getRandonValue(); 
    displayGameValues();
    
}

function moveTop(){
    for ( let i = 0; i < 4; i++){
        let verticalRow = [values[i], values[i+4], values[i+8], values[i+12]]; 
        let numbers = verticalRow.filter(numersNotZero); 
        let zeroNumer = 4 - numbers.length; 
        let zerrosArray = Array(zeroNumer).fill(0);
        let correctVerticalRow = numbers.concat(zerrosArray); 
        for ( let j = 0 ; j <4; j++){
            values[i+j*4] = correctVerticalRow[j]
        }
    }
    sumColumsTop();
    for ( let i = 0; i < 4; i++){
        let verticalRow = [values[i], values[i+4], values[i+8], values[i+12]]; 
        let numbers = verticalRow.filter(numersNotZero); 
        let zeroNumer = 4 - numbers.length; 
        let zerrosArray = Array(zeroNumer).fill(0);
        let correctVerticalRow = numbers.concat(zerrosArray); 
        for ( let j = 0 ; j <4; j++){
            values[i+j*4] = correctVerticalRow[j]
        }
    }
    values[getRandomPosition()] = getRandonValue(); 
    displayGameValues();
    

}

function moveRight(){
    for ( let i = 0; i < 16; i++){
        if ( i % 4 === 0 ){
            let gorizontalRow = [ values[i], values[i+1], values[i+2], values[i+3]]; 
            let numbers = gorizontalRow.filter(numersNotZero); 
            let zeroNumer = 4 - numbers.length; 
            let zerrosArray = Array(zeroNumer).fill(0);
            let coreectGorizontalRow = zerrosArray.concat(numbers);
            for ( let j = 0 ; j <4; j++){
                values[i+j] = coreectGorizontalRow[j]
            }
        } 
    }
    sumRowsRight();
    for ( let i = 0; i < 16; i++){
        if ( i % 4 === 0 ){
            let gorizontalRow = [ values[i], values[i+1], values[i+2], values[i+3]]; 
            let numbers = gorizontalRow.filter(numersNotZero); 
            let zeroNumer = 4 - numbers.length; 
            let zerrosArray = Array(zeroNumer).fill(0);
            let coreectGorizontalRow = zerrosArray.concat(numbers);
            for ( let j = 0 ; j <4; j++){
                values[i+j] = coreectGorizontalRow[j]
            }
        } 
    }
    values[getRandomPosition()] = getRandonValue();
    displayGameValues(); 
}

function moveLeft(){
    for ( let i = 0; i < 16; i++){
        if ( i % 4 === 0 ){
            let gorizontalRow = [ values[i], values[i+1], values[i+2], values[i+3]]; 
            let numbers = gorizontalRow.filter(numersNotZero); 
            let zeroNumer = 4 - numbers.length; 
            let zerrosArray = Array(zeroNumer).fill(0);
            let coreectGorizontalRow = numbers.concat(zerrosArray);
            for ( let j = 0 ; j <4; j++){
                values[i+j] = coreectGorizontalRow[j]
            }
        } 
    }
    sumRowsLeft();
    for ( let i = 0; i < 16; i++){
        if ( i % 4 === 0 ){
            let gorizontalRow = [ values[i], values[i+1], values[i+2], values[i+3]]; 
            let numbers = gorizontalRow.filter(numersNotZero); 
            let zeroNumer = 4 - numbers.length; 
            let zerrosArray = Array(zeroNumer).fill(0);
            let coreectGorizontalRow = numbers.concat(zerrosArray);
            for ( let j = 0 ; j <4; j++){
                values[i+j] = coreectGorizontalRow[j]
            }
        } 
    }
    values[getRandomPosition()] = getRandonValue(); 
    displayGameValues(); 
    
}

function sumRowsLeft() {
    for (let i = 0; i <16; i++){
        if (values[i] === values[i+1] && i % 4 != 3){
            let sumNum = values[i]+ values[i+1];
            values[i] = sumNum;
            values[i+1] = 0;
        }
    }
}
function sumRowsRight() {
    for (let i = 0; i <16; i++){
        if (values[i] === values[i+1] && i % 4 != 3){
            let sumNum = values[i]+ values[i+1];
            values[i] = 0;
            values[i+1] = sumNum;
        }
    }
}

function sumColumsTop (){
    for (let i = 0; i <16; i++){
        if (values[i] === values[i+4]){
            // console.log("YES")
            let sumNum = values[i]+values[i+4]; 
            values[i] = sumNum; 
            values[i+4] = 0; 
        }
    }
}
function sumColumsButton (){
    for (let i = 0; i <16; i++){
        if (values[i] === values[i+4]){
            // console.log("YES")
            let sumNum = values[i]+values[i+4]; 
            values[i] = 0; 
            values[i+4] = sumNum; 
        }
    }
}
// 1. проверить схлопывание вниз и складывание при варианте 
// 0 0 0 2
// 0 0 0 2
// 0 0 0 0
// 0 0 0 2

// должно быть 
// 0 0 0 0
// 0 0 0 0
// 0 0 0 2
// 0 0 0 4

// выходит 
// 0 0 0 0
// 0 0 0 0
// 0 0 0 4
// 0 0 0 2


// 2. проверить схлопывание вниз и складывание при варианте 
// 0 0 0 0
// 0 0 0 4
// 0 0 0 4
// 0 0 0 8

// должно быть 
// 0 0 0 0
// 0 0 0 0
// 0 0 0 8
// 0 0 0 8

// выходит 
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 0 0 0 16












