function add(number1, number2) {
    return number1 + number2;
}
function substract(number1, number2) {
    return number1 - number2;
}
function mutiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        return "ERROR: Cannot divide by zero"
    }
    return number1/number2;
}

// A function that calls the above functions after taking number and operator
function operate(number1, number2, operator) {
    switch (operator){
        case "+":
            return add(number1, number2);
        case "-":
            return substract(number1, number2);
        case "*":
            return mutiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            return "ERROR: Insert either +, -, *, /";
    }
}

// Functions that populate display after clicking buttons. Should also store the number
let displayNumber = "";
const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = displayNumber || "0";
}
// Function to hold button clicks
const buttonClicks = document.querySelectorAll(".num");
buttonClicks.forEach(button => {
    button.addEventListener("click", () => {
        displayNumber += button.value;
        updateDisplay();
    });
});
// reset the stored number using "CLEAR" and set the display to "0"
document.getElementById("clear").addEventListener("click", () => {
    displayNumber = "";
    updateDisplay();
});





