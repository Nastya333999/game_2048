let game = document.querySelector(".game");
let sqw = document.querySelector(".sqw");
let result = document.querySelector("#result");


let allNumbersSqwId = [];
for (let i = 1; i <= 16; i++) {
  allNumbersSqwId.push(document.getElementById(i.toString()));
}

let values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function getRandonValue() {
  let randomValue = Math.floor(Math.random() * 100);
  if (randomValue < 90) {
    return 2;
  }
  else {
    return 4;
  }
}

let btnNewGame = document.querySelector("#new_game");
btnNewGame.onclick = newGame;

// let left = document.querySelector("#left");
// left.onclick = moveLeft;

// let bottom = document.querySelector("#bottom");
// bottom.onclick = moveDown;

// let tops = document.querySelector("#tops");
// tops.onclick = moveTop;

// let right = document.querySelector("#right");
// right.onclick = moveRight;





function displayGameValues() {
  for (let i = 0; i < 16; i++) {
    if (values[i] === 0) {
      allNumbersSqwId[i].innerHTML = "";
    } else {
      allNumbersSqwId[i].innerHTML = values[i].toString();
    }
  }
}

function getRandomPosition() {
  let arrFilter = [];
  values.forEach(function (value, index) {
    if (value === 0) {
      arrFilter.push(index);
    }
  });
  let arrFilterRandomIndex = Math.floor(Math.random() * arrFilter.length);
  let newValueIndex = arrFilter[arrFilterRandomIndex];

  return newValueIndex;
}


function newGame() {
  values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  values[getRandomPosition()] = getRandonValue();
  values[getRandomPosition()] = getRandonValue();
  displayGameValues();
}


function numersNotZero(num) {
  return num > 0;
}

function moveToDown() {
  for (let i = 0; i < 4; i++) {
    // массив вертикальных чисел
    let verticalRow = [values[i], values[i + 4], values[i + 8], values[i + 12]];

    // массив чисел по вертикальной линии больше 0
    let numbers = verticalRow.filter(numersNotZero);

    // выводим кол-во нулей. = 4 клетки - кол-во чисел
    let zeroNumer = 4 - numbers.length;
    let zerrosArray = Array(zeroNumer).fill(0);

    // делаем правильный массив со сдвигом чисел вниз
    let correctVerticalRow = zerrosArray.concat(numbers);

    for (let j = 0; j < 4; j++) {
      values[i + j * 4] = correctVerticalRow[j];
    }
  }
}


function moveToTop() {
  for (let i = 0; i < 4; i++) {
    let verticalRow = [values[i], values[i + 4], values[i + 8], values[i + 12]];
    let numbers = verticalRow.filter(numersNotZero);
    let zeroNumer = 4 - numbers.length;
    let zerrosArray = Array(zeroNumer).fill(0);
    let correctVerticalRow = numbers.concat(zerrosArray);
    for (let j = 0; j < 4; j++) {
      values[i + j * 4] = correctVerticalRow[j];
    }
  }
}


function moveToLeft() {
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let gorizontalRow = [
        values[i],
        values[i + 1],
        values[i + 2],
        values[i + 3],
      ];
      let numbers = gorizontalRow.filter(numersNotZero);
      let zeroNumer = 4 - numbers.length;
      let zerrosArray = Array(zeroNumer).fill(0);
      let correctGorizontalRow = numbers.concat(zerrosArray);
      for (let j = 0; j < 4; j++) {
        values[i + j] = correctGorizontalRow[j];
      }
    }
  }
}


function moveToRight() {
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let gorizontalRow = [
        values[i],
        values[i + 1],
        values[i + 2],
        values[i + 3],
      ];
      let numbers = gorizontalRow.filter(numersNotZero);
      let zeroNumer = 4 - numbers.length;
      let zerrosArray = Array(zeroNumer).fill(0);
      let correctGorisontalRow = zerrosArray.concat(numbers);
      for (let j = 0; j < 4; j++) {
        values[i + j] = correctGorisontalRow[j];
      }
    }
  }
}
function sumRow() {
  for (let i = 0; i < 16; i++) {
    if (values[i] === values[i + 1]) {
      let sumTotal = values[i] + values[i + 1]
      values[i] = sumTotal
      values[i + 1] = 0;
      result.innerHTML += sumTotal
      
    }
  }
}
function sumCol() {
  for (let i = 0; i < 16; i++) {
    if (values[i] === values[i + 4]) {
      let sumTotal = values[i] + values[i + 4]
      values[i] = sumTotal
      values[i + 4] = 0;
      result.innerHTML += sumTotal

    }
  }
}

window.onkeydown = function move() {
  if (event.keyCode === 37) {
    moveLeft();
  };
  if (event.keyCode === 38) {
    moveTop();
  };
  if (event.keyCode === 39) {
    moveRight();
  };
  if (event.keyCode === 40) {
    moveDown();
  };
}

function moveTop() {
  moveToTop();
  sumCol();
  moveToTop();
  values[getRandomPosition()] = getRandonValue();
  displayGameValues();
}
function moveLeft() {
  moveToLeft();
  sumRow();
  moveToLeft();
  values[getRandomPosition()] = getRandonValue();
  displayGameValues();

}
function moveRight() {
  moveToRight();
  sumRow();
  moveToRight();
  values[getRandomPosition()] = getRandonValue();
  displayGameValues();

}
function moveDown() {
  moveToDown();
  sumCol();
  moveToDown();
  values[getRandomPosition()] = getRandonValue();
  displayGameValues();

}




// функция, которая при клике на кнопку вниз, которая сдвигает блоки вниз
// функция, которая проверяет при клике вниз, если цифры равны, то складывает
