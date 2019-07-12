// var  keys = document.querySelector('.calculator-keys');

// keys.addEventListener('click', 'calFunction')
 
var cal=document.querySelector('.calculator-keys')
cal.addEventListener('click',calFunction);


function calFunction(event) {
    //  var  {target }= event;
      var target=event.target; // an object that represents the element that was clicked.
    if (!event.target.matches('button')) {
      return;
    }
    // check what type of button is click to know what function to call
    if (target.classList.contains('digit')) {
        // if it is digit call function to add digit
        inputDigit(target.value);
        updateDisplay();
        console.log('digit', target.value);
    }
   
    if (target.classList.contains('decimal')) {
        // if it is decimal call function to add decimal
        inputDecimal(target.value);
        updateDisplay();
        console.log('decimal function', target.value);
    }

    if (target.classList.contains('operator')) {
        // if it is an operator(+ or - or / or * or = )
        handleOperator(target.value);
        updateDisplay();
        console.log('operator', target.value);
        return;
    }


    if (target.classList.contains('all-clear')) {
        // if it is AC call function to add decimal
        resetCalculator();
        updateDisplay();
        console.log('all-clear', target.value);
        return;
    }
    
};





/*.....function handlling each input event......... */

//declare an object called calculator
var calculator={
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}


// // to display input digit on screen
function inputDigit(digit) {
     const {  waitingForSecondOperand } = calculator;
     if (waitingForSecondOperand === true)
     {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } 
  else {
    if(calculator.displayValue ==='0'){
        calculator.displayValue=digit;
    }
    else{
        calculator.displayValue= calculator.displayValue + digit
    }
    console.log(calculator);
  }}

// function to display decimal point on screen
function inputDecimal(dot) {
    //prevent add dot after clicking an operator
    if (calculator.waitingForSecondOperand === true)return;

    else if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
    
    console.log(calculator);
  }

// function handling operator
function handleOperator(newOperator) {
const { firstOperand, displayValue, operator } = calculator

const inputValue = parseFloat(displayValue);

//checks if an operator already exists and if waitingForSecondOperand has a truthy value
if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = newOperator;
    console.log(calculator);
    return;
  }

if (firstOperand === null) {
    calculator.firstOperand = inputValue;
}
// check if you have press an operator before
else if (operator) {
    const result = performCalculation[operator](firstOperand, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

calculator.waitingForSecondOperand = true;
calculator.operator = newOperator;
console.log(calculator);
}


// This perform the actual calculation
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };

// clear what is on the display by resetting the calculator to it initila state
function resetCalculator(){
    calculator={
        displayValue:'0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,

    };
}




  // UPDATE DISPLAY
function updateDisplay() {
    var display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }

