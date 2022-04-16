let num1 = 118;
let num2 = 16;



 document.getElementById("num1-el").textContent= num1;
 document.getElementById("num2-el").textContent= num2;

let totalSum = document.getElementById("sum-el");
function add() {
    let sum = num1 + num2;
    totalSum.textContent = sum;
    console.log(num1);
  
}

function subtract() {
    let sum = num1 - num2;
    totalSum.textContent = sum;
  
}
function multiply() {
    let sum = num1 * num2;
    totalSum.textContent = sum;
  
}

function divide() {
    let sum = num1 / num2;
    totalSum.textContent = sum.toFixed(2); 
}