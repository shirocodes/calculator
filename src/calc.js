// functions fo math operators
function add(number1, number2) {
    return number1 + number2;
}
function substract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return number1/number2;
}

//three variables for the operation 
let operand1 = null; //when a user clicks first number, it gets stored in this variable....and so on
let operand2 = null;
let selectedOperator = null;

// operate function that takes operator, two numbers, and calls the calculation functions
function operate(operator, number1, number2) {
    switch(operator) {
        case "+":
            return add(number1,number2);
        case "-":
            return substract(number1,number2);
        case "*":
            return multiply(number1,number2);
        case "/":
            return divide(number1,number2);
        default:
            return "Error: Invalid operator"
    }
    return Math.round(result*100) / 100; //rounding off result to 2 decimal places
}

// Functions to populate the display when you click digit buttons. 
const display = document.querySelector("#display"); //select display input field
const numberButtons = document.querySelectorAll('input[type="button"]:not(.clear, .equal, .operator)')
const clearButton = document.querySelector(".clear"); //selects the clear button

let displayValue = ""; //variable to store the value in display field

function updateDisplay(value) { //function updating display field when number is clicked
    displayValue += value;
    display.value = displayValue;
}
function clearDisplay() { //function to clear the display
    displayValue = "";
    display.value = "";
}

// event listeners to buttons and clear button
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateDisplay(button.value); //pass the clicked button to display
    });
});
clearButton.addEventListener("click", clearDisplay); //clear display after clicking clear button

// making it do operations when = is clicked.
let storeUserInput = {
    operand1: "",
    operand2: "",
    selectedOperator: "",
    resultDisplayed: false  //this will prevent appending a number on top of another
}

numberButtons.forEach(button => { //handling number buttons
    button.addEventListener("click", () => {
        if (storeUserInput.resultDisplayed){
            display.value = "";
            storeUserInput.resultDisplayed = false;
        }
        if (storeUserInput.selectedOperator === "") {
            storeUserInput.operand1 += button.value;
            display.value = storeUserInput.operand1
        } else {
            storeUserInput.operand2 += button.value;
            display.value = storeUserInput.operand2;
        }
    });
});

const operatorButtons = document.querySelectorAll(".operator"); //select operator buttons
operatorButtons.forEach(button => {  
    button.addEventListener("click", () => {
        if (storeUserInput.operand1 !== "") {
            storeUserInput.selectedOperator = button.value;
            display.value = button.value; //will show the operator for a while before only showing operand1
            setTimeout(() => display.value = storeUserInput.operand1, 400);
        }
    });
});

const equalButton = document.querySelector(".equal"); //selecting the = button to activate an operation
equalButton.addEventListener("click", () => {
    if (storeUserInput.operand1 !== "" && storeUserInput.operand2 !== "" && storeUserInput.selectedOperator !== "") {
        let result = operate(
            storeUserInput.selectedOperator,
            parseFloat(storeUserInput.operand1),
            parseFloat(storeUserInput.operand2),
        )
        display.value = result;

        storeUserInput.operand1 = result.toString();
        storeUserInput.operand2 = "";
        storeUserInput.selectedOperator = "";
        storeUserInput.resultDisplayed = true;
    }
});

//Decimal point manipulation 
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    if (storeUserInput.resultDisplayed) {
        display.value = "0"
        storeUserInput.operand1 = "0";
        storeUserInput.resultDisplayed = false;
        return;
    }
    if (!storeUserInput.operand1.includes(".")) {
        storeUserInput.operand1 += ".";
        display.value += "."
    } else {
        if (!storeUserInput.operand2.includes(".")) {
            storeUserInput.operand2 += ".";
            display.value += ".";
        }
    }
});

//backspace button [X]
const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
    if (storeUserInput.selectedOperator === "") {
        storeUserInput.operand1 = storeUserInput.operand1.slice(0, -1);
    } else {
        storeUserInput.operand2 = storeUserInput.operand2.slice(0, -1);
    }
});

//enabling keyboard entries
document.addEventListener("keydown", (Event) => {
    if (!isNaN(Event.key)) {
        display.value += Event.key;
        if (storeUserInput.selectedOperator === "") {
            storeUserInput.operand1 += Event.key;
        } else if (["+", "-", "*", "/"].includes(Event.key)) {
            if (storeUserInput.selectedOperator === "") {
                storeUserInput.selectedOperator = Event.key;
            }
        }else if (Event.key === "Enter") {
            equalButton.click();
        }else if (Event.key === "Backspace") {
            backspaceButton.click();
        }else if (Event.key === ".") {
            decimalButton.click();
        }else if (Event.key.toLowerCase() === "c") {
            clearButton.click();
        }
    }
});





