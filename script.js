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


let bottom = document.querySelector('#bottom');
bottom.onclick = moveDown;


function numersNotZero (num){
    return num > 0;
}

function moveDown (){
    console.log(values)
    for ( let i = 0; i <4; i++){
        
        let num1 = values[i];
        let num2 = values[i+4];
        let num3 = values[i+8];
        let num4 = values[i+12];

        let verticalRow = [num1, num2, num3, num4]; // массив вертикальных чисе
        let numbers = verticalRow.filter(numersNotZero) // массив чисел по вертикальной линии больше 0

        let zeroNumer = 4 - numbers.length; // выводим кол-во нулей. = 4 клетки - кол-во чисел
        let zerrosArray = Array(zeroNumer).fill(0);
        
        // делаем правильный массив со сдвигом чисел вниз 
        let correctVerticalRow = zerrosArray.concat(numbers)

        values[i] = correctVerticalRow[0];
        values[i+4]  = correctVerticalRow[1];
        values[i+8]  = correctVerticalRow[2];
        values[i+12]  = correctVerticalRow[3];
        
        
        
        // console.log(numbers)
    }
    displayGameValues();
    console.log(values)
        // let num1 = values[0];
        // let num2 = values[4];
        // let num3 = values[8];
        // let num4 = values[12];

        // let verticalRow = [num1, num2, num3, num4]; // массив вертикальных чисе
        // let numbers = verticalRow.filter(numersNotZero) // массив чисел по вертикальной линии больше 0

        // let zeroNumer = 4 - numbers.length; // выводим кол-во нулей. = 4 клетки - кол-во чисел
        // let zerrosArray = Array(zeroNumer).fill(0);
        
        // // делаем правильный массив со сдвигом чисел вниз 
        // let correctVerticalRow = zerrosArray.concat(numbers)
        
        // allNumbersSqwId[0].innerHTML = correctVerticalRow[0].toString();
        // allNumbersSqwId[4].innerHTML  = correctVerticalRow[1].toString();
        // allNumbersSqwId[8].innerHTML  = correctVerticalRow[2].toString();
        // allNumbersSqwId[12].innerHTML  = correctVerticalRow[3].toString();

        // console.log(correctVerticalRow)
        // console.log(values[0])
        // console.log(values[4])
        // console.log(values[8])
        // console.log(values[12])
        
}



        


function newGame (){
    values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    values[getRandomPosition()] = getRandonValue(); 
    values[getRandomPosition()] = getRandonValue(); 
    displayGameValues();
}



// функция, которая при клике на кнопку вниз, которая сдвигает блоки вниз
// функция, которая проверяет при клике вниз, если цифры равны, то складывает 

// values.reverse();





// for ( i = 0; i = arr.length; i++){
//     if ( i % 4 === 4 || i % 4 === 5){
//         console.log(arrrrr)
//     }
    
// }

//     let arr = [1,2,3,4,1,2,3,4]; 

// let num1 = arr [0]; 
// let num2 = arr [1]; 
// let num3 = arr [2]; 
// let num4 = arr [3]; 
// let num5 = arr [4]; 
// let num6 = arr [5]; 
// let num7 = arr [6]; 
// let num8 = arr [7]; 



//     if ( num1 == num4 ){
//         console.log("yes")
//     }
    
















