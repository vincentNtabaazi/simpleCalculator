// Selectors
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const screenView = document.querySelectorAll(".view");
const equalSign = document.querySelectorAll(".equalOp");
let upperSection = document.querySelector(".upperSection");
let lowerSection = document.querySelector(".lowerSection");
let refresh = document.querySelector(".refresh");

// Event listeners
numbers.forEach((number) => {
  number.addEventListener('click', addNumberToArray);
})

operators.forEach((operator) => {
  operator.addEventListener('click', getOpIndex);
})

equalSign.forEach((equalSign) => {
  equalSign.addEventListener('click', calculation);
})

screenView.forEach((view) => {
  view.addEventListener('click', (e) => {
    screenUpperSection = arr.join("")
    upperSection.innerText = screenUpperSection
  })
})

refresh.addEventListener('click', refreshCalculator)

//Global Variables
let screenUpperSection = "";
let index;
let Ans = 0;
let arr = [];
let arrV2 = [];
let counter = []
upperSection.innerText = 0
lowerSection.innerText = 0 

// Functions
function refreshCalculator() {
  Ans = 0
  firstNumber = 0
  secondNumber = 0
  arr =[]
  upperSection.innerText = 0
  lowerSection.innerText = 0 
}

function addNumberToArray(e) {
  arr.push(e.target.innerText);
  firstNumber = parseFloat(arr.join(""));
}

function getOpIndex(e) {
  arr.push(e.target.innerText);
  index = arr.lastIndexOf(e.target.innerText);
  if (index !== 0) {
    if (index !== (counter[counter.length - 1] + 1)) {
      counter.push(index);
      if (counter.length > 1) {
        prematureCalculation(e);
        counter.pop();
        counter.push(arr.length - 1);
      }
    }
  }
}

function calculation(e) {
  index = counter[0];
  counter.pop();
  secondNumberArr = arr.slice(index + 1, arr.length);
  secondNumber = parseFloat(secondNumberArr.join(""));
  if (arr[index] === "+") {
    Ans = firstNumber + secondNumber;
    if (Ans % 1 !== 0) {
      Ans = Ans.toFixed(1);
    }
  } else if (arr[index] === "-") {
    Ans = firstNumber - secondNumber;
    if (Ans % 1 !== 0) {
      Ans = Ans.toFixed(1);
    }
  } else if (arr[index] === "/") {
    Ans = firstNumber / secondNumber;
    if (Ans % 1 !== 0) {
      Ans = Ans.toFixed(1);
    }
  } else if (arr[index] === "*") {
    Ans = firstNumber * secondNumber;
    if (Ans % 1 !== 0) {
      Ans = Ans.toFixed(1);
    }
  }
  lowerSection.innerText = Ans;
  arr.length = 0;
  firstNumber = 0;
  secondNumber = 0;
  screenUpperSection = '';
}

function prematureCalculation(e) {
  index = counter[0];
  secondNumberArr = arr.slice(index + 1, arr.length);
  secondNumber = parseFloat(secondNumberArr.join(""));
  counter.splice(0, 1);
  if (arr[index] === "+") {
    Ans = firstNumber + secondNumber;
    if (Ans % 1 !== 0) {
      Ans = Ans.toFixed(1);
    }
  } else if (arr[index] === "-") {
    Ans = firstNumber - secondNumber;
    if (Ans % 1 !== 0) {
      Ans = Ans.toFixed(1);
    }
  } else if (arr[index] === "/") {
    Ans = firstNumber / secondNumber;
    if (Ans % 1 !== 0) {
      Ans = Ans.toFixed(1);
    }
  } else if (arr[index] === "*") {
    Ans = firstNumber * secondNumber;
    Ans = Ans.toFixed(1);
  }
    arrV2 = arr.splice(0, counter[1] - 1);
    secondNumberArr = secondNumberArr.splice(0, secondNumberArr.length);
    arrV2.push(Ans);
    arrV2.push(e.target.innerText);
    upperSection.innerHTML = arrV2;
    arr = arrV2;
}
