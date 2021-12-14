let num1 = 8;
let num2 = 2;
let numOne = document.getElementById("num1=el").textContent = num1
let numTwo = document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el");

function addition() {
    let result = num1+num2
    sumEl.textContent = "answer :" + result;
}
function subtraction() {
     let result = num1-num2
    sumEl.textContent = "answer :" + result;
}
function multiply() {
     let result = num1*num2
    sumEl.textContent = "answer :" + result;
}
function divide() {
     let result = num1/num2
    sumEl.textContent = "answer :" + result;
}
