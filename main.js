let a = "";
let b = "";
let operator = "";
// console.log(a);
// console.log(b);
// console.log(operator);

let operandButton = document.querySelectorAll(".operand");
let operatorButton = document.querySelectorAll(".operator");
let equalsButton = document.querySelector(".equals");
let clearButton = document.querySelector(".clear");
let textInput = document.querySelector(".calculator__input--text");

operandButton.forEach(item => {
    item.addEventListener("click", () => {
        if (a !== "") {
            b = item.value;
            textInput.value += item.value;
        }
        else {
            a = item.value;
            textInput.value = item.value;
        }
    })
});

operatorButton.forEach(item => {
    item.addEventListener("click", () => {
        operator = item.value;
        textInput.value += item.value;
    })
});

equalsButton.addEventListener("click", () => {
    operate(operator, a, b);
});

clearButton.addEventListener("click", () => {
    textInput.value = "";
    a = "";
    b = "";
    operator = "";
})

function operate(operator, a, b) {
    switch(operator) {
        case "+": 
            return add(a, b);
        case "-": 
            return subtract(a, b);
        case "*": 
            return multiply(a, b);
        case "/": 
            return divide(a, b);
        default: 
            console.log("Enter a Valid Operator!!!!")
    }
}

function add (a, b) {
    textInput.value = Number(a) + Number(b);
    return Number(a) + Number(b);
}

function subtract (a, b) {
    textInput.value = Number(a) - Number(b);
    return Number(a) - Number(b);
}

function multiply (a, b) {
    textInput.value = Number(a) * Number(b);
    return Number(a) * Number(b);
}

function divide (a, b) {
    textInput.value = Number(a) / Number(b);
    return Number(a) / Number(b);
}