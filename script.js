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

// console.log(allNumbersSqwId)

function newGame (){
    values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    values[getRandomPosition()] = getRandonValue(); 
    values[getRandomPosition()] = getRandonValue(); 
    displayGameValues();
}

let bottom = document.querySelector('#bottom');
bottom.onclick = moveDown;


function numersNotZero (num){
    return num > 0;
}

function moveDown (){
    for ( let i = 0; i <4; i++){

        // массив вертикальных чисел
        let verticalRow = [values[i], values[i+4], values[i+8], values[i+12]];

        // массив чисел по вертикальной линии больше 0
        let numbers = verticalRow.filter(numersNotZero); 

        // выводим кол-во нулей. = 4 клетки - кол-во чисел
        let zeroNumer = 4 - numbers.length; 
        let zerrosArray = Array(zeroNumer).fill(0);
        
        // делаем правильный массив со сдвигом чисел вниз 
        let correctVerticalRow = zerrosArray.concat(numbers)

        for ( let j = 0 ; j <4; j++){
            values[i+j*4] = correctVerticalRow[j]
        }
    }
    displayGameValues();
}

let tops = document.querySelector('#tops');
tops.onclick = moveTop;

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
    displayGameValues();
}

// let left = document.querySelector('#left');
// left.onclick = moveLeft;

// function moveLeft(){
//     for ( let i = 0; i < 4; i++){
//         let gorizontalRow = [ values[i], values[i+1], values[i+2], values[i+3]]; 
//         let numbers = gorizontalRow.filter(numersNotZero);
//         let zeroNumer = 4 - numbers.length; 
//         let zerrosArray = Array(zeroNumer).fill(0);
//         let correctGorisontalRow = numbers.concat(zerrosArray); 
        

//     }
//     displayGameValues();
// }



// функция, которая при клике на кнопку вниз, которая сдвигает блоки вниз
// функция, которая проверяет при клике вниз, если цифры равны, то складывает 
















