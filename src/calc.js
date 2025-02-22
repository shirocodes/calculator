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



