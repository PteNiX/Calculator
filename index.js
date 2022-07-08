let a = "";
let b = "";

let operator = "";
let finish = false;

let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let action = ["+", "-", "X", "/"];

let screen = document.querySelector(".screen");

//чысцім экран
const clearAll = () => {
  a = "";
  b = "";

  operator = "";
  finish = false;
  document.querySelector(".screen").innerHTML = 0;
};

let AC = document.querySelector(".ac");

AC.addEventListener("click", clearAll);

//

document.querySelector(".buttons").onclick = (e) => {
  const key = e.target.innerHTML;
  console.log(key);

  if (digit.includes(key)) {
    a += key;
    console.log(a, b, operator);
    screen.innerHTML = a;
  }
};
