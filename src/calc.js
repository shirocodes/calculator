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
// declare the variable to store display number
document.addEventListener("DOMContentLoaded", () => {
    let displayNumber = "";        
    const display = document.getElementById("display");
// function to change the calc's display based on user input
    function updateDisplay() {
        display.textContent = displayNumber === "" ? "0": displayNumber;
    }

    const buttonClicks = document.querySelectorAll(".num"); // selects all buttons and stores them in a nodelist
    buttonClicks.forEach(button => {      //loops through each button in buttonclicks
        button.addEventListener("click", () => {
            displayNumber += button.value;
            updateDisplay();
        });
    });

});

//Make the calculator work using the 'operate' function 
let firstNumber = null; //storing first number input






