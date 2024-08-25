let currentInput = '';
let operation = null;
let firstOperand = null;

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '') return;
    
    if (firstOperand !== null) {
        calculateResult();
    }

    operation = op;
    firstOperand = parseFloat(currentInput);
    currentInput = '';
}

function calculateResult() {
    if (firstOperand === null || currentInput === '' || operation === null) return;

    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    firstOperand = null;
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    firstOperand = null;
    updateDisplay('0');
}
