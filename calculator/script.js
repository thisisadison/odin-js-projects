const buttonContainer = document.querySelector(".buttonContainer");
const display = document.getElementById('output');
let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;
let prevOp = false;

// Perform arithmetic logic

function operate(operator, operand1, operand2){
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    
    if (operator == '+') {
        return sum(operand1, operand2);
    } else if (operator == '-') {
        return subtract(operand1, operand2);
    } else if (operator == '÷'){
        return division(operand1, operand2);
    } else if (operator == '^') {
        return power(operand1, operand2);
    } else if (operator == '%') {
        console.log("hey its me");
        return modulo(operand1, operand2);
    } else if (operator == '×') {
        return multiplication(operand1, operand2);
    } else {
        return "SYNTAX ERROR";
    }

}

function sum(operand1, operand2) {
    console.log(operand1 + operand2);
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function division(operand1, operand2) {
    return operand1 / operand2;
}

function multiplication(operand1, operand2) {
    return operand1 * operand2;
}

function power(operand1, operand2) {
    return operand1 ** operand2;
}

function modulo(operand1, operand2) {
    return operand1 % operand2;
}

// Helper functions

function reset(param1, param2, param3) {
    operator = param1;
    operand1 = param2;
    operand2 = param3;
}

function updateDisplay (update) {
    display.textContent = update;
}

// Main logic

buttonContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'BUTTON') {
        let value = clickedElement.textContent;
        if (clickedElement.id === 'acBtn') {
            updateDisplay(0);
            reset(null, null, null);
        } else if (clickedElement.id === 'delBtn') {
            if (display.textContent.length > 1) {
                updateDisplay(display.textContent.slice(0, -1));
            } else {
                updateDisplay(0);
            }
        } else if (clickedElement.id === 'equalBtn') {
            if (operand2 == null && operand1 != null && operator != null) {
                reset(operator, operand1, display.textContent);
            }
            
            if (operand2 == 0 && operator == '÷') {
                updateDisplay('SYNTAX ERROR');
            } else if (operand1 != null && operator == null && operator2 == null) {
                updateDisplay(operand1);
            } else if (operand1 == null && operand2 == null && operator == null) {
                if (display.textContent == '0'){
                    updateDisplay(0);
                } else {
                    updateDisplay(display.textContent);
                }
            } else if (operand1 != null && operand2 != null && operator != null) {
                result = operate(operator, operand1, operand2);
                updateDisplay(result);
                reset(null, result, null);
            } else {
                updateDisplay('SYNTAX ERROR');
            }
        } else if (clickedElement.classList.contains('operand')) {
            if (prevOp) {
                updateDisplay('');
                prevOp = false;
            }
            if (display.textContent === '0' && value !== '.') {
                updateDisplay(value);
            } else {
                if (display.textContent.length > 20) {
                    let saveContent = display.textContent;
                    updateDisplay("MAX VALUE EXCEEDED");
                    setTimeout(function() {
                        updateDisplay(saveContent);
                    }, 1000);
                } else if (display.textContent != 'SYNTAX ERROR' && display.textContent != 'MAX VALUE EXCEEDED') {
                    display.textContent += value;
                }
            }
        } else if (clickedElement.classList.contains('operator')) {
            prevOp = true;
            reset(value, display.textContent, operand2);
            updateDisplay(value);
        }
    }
});

// operandButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         updateDisplay(button.textContent);
//     });
// });


// const container = document.querySelector('buttonContainer');

// container.addEventListener('click', (event) => {
//     if (event.target.matches('.button')) {
//         console.log('You clicked button: ', event.target.textContent);
//     }
// });