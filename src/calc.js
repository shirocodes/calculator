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







