const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const AllClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
  } }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }



delete() {
}

appendNumber(number) {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
        })
      })
}

chooseOperation(operation) {
}

compute() {
}

updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
}






/*// kaip padaryt, kad rodytu virsuje visus skaicius, kuriuos paspaudzia?
// cia bus array? tsg pridedi elementus, kuriuos paspaudzia?

function getResult() {

let array = [];

let resultElement = document.getElementById("result");

let everyButton = document.getElementsByTagName("button");

for (let i = 0; i < everyButton.length; i++) {
if (everyButton.clicked == true) {
    array.push(everyButton.clicked.innerText)
    resultElement.innerText = array.toString();

}
}
}*/



