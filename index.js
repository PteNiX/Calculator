let a = "";
let b = "";

let operator = "";
let finish = false;

let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let action = ["+", "-", "x", "/"];

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

  if (digit.includes(key)) {
    if (b === "" && operator === "") {
      a += key;

      screen.innerHTML = a;
    } else if (a != "" && b != "" && finish) {
      b = key;
      finish = false;
      screen.innerHTML = b;
    } else {
      b += key;
      screen.innerHTML = b;
    }
  }

  if (action.includes(key)) {
    operator = key;
    screen.innerHTML = operator;
  }

  //equal
  if (key == "=") {
    if (b == "") b = a;
    switch (operator) {
      case "+":
        a = +a + +b;
        break;

      case "-":
        a = +a - +b;
        break;

      case "x":
        a = +a * +b;
        break;

      case "/":
        if (b == 0) {
          document.querySelector(".screen").innerHTML = "памылка";
          a = "";
          b = "";
          operator = "";
          return;
        }
        a = +a / +b;
        break;
    }
    finish = true;
    screen.innerHTML = a;
  }
};
