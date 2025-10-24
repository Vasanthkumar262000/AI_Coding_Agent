// Calculator script
// Define constants for DOM elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Calculator state object
let calculator = {
  currentInput: '',
  previousValue: null,
  operator: null,
  resetNext: false,
};

// Update the calculator display
function updateDisplay() {
  display.value = calculator.currentInput || '0';
}

// Handle digit input
function handleDigit(digit) {
  if (calculator.resetNext) {
    calculator.currentInput = '';
    calculator.resetNext = false;
  }
  // Prevent leading zeros unless after a decimal point
  if (calculator.currentInput === '0' && digit !== '.') {
    calculator.currentInput = digit;
  } else {
    calculator.currentInput += digit;
  }
  updateDisplay();
}

// Compute the result of the pending operation
function compute() {
  const prev = parseFloat(calculator.previousValue);
  const curr = parseFloat(calculator.currentInput);
  if (isNaN(prev) || isNaN(curr)) {
    return;
  }
  let result;
  switch (calculator.operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
        // Division by zero error handling
        display.value = 'Error: Division by zero';
        display.classList.add('error');
        // Reset state after a short delay
        setTimeout(() => {
          handleClear();
          display.classList.remove('error');
        }, 1500);
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }
  // Store result as string for further calculations
  calculator.currentInput = String(result);
  calculator.previousValue = null;
  calculator.operator = null;
  calculator.resetNext = true;
  updateDisplay();
  return result;
}

// Handle operator input
function handleOperator(op) {
  if (calculator.operator && calculator.previousValue !== null && !calculator.resetNext) {
    // Compute intermediate result before setting new operator
    compute();
  }
  if (calculator.previousValue === null) {
    calculator.previousValue = calculator.currentInput || '0';
  }
  calculator.operator = op;
  calculator.resetNext = true;
}

// Handle equals input
function handleEquals() {
  if (calculator.operator) {
    compute();
    // After compute, operator is cleared inside compute()
  }
}

// Handle clear input
function handleClear() {
  calculator = {
    currentInput: '',
    previousValue: null,
    operator: null,
    resetNext: false,
  };
  updateDisplay();
}

// Route input value to appropriate handler
function routeInput(value) {
  if (!value) return;
  if (value >= '0' && value <= '9' || value === '.') {
    handleDigit(value);
  } else if (value === '+' || value === '-' || value === '*' || value === '/') {
    handleOperator(value);
  } else if (value === '=') {
    handleEquals();
  } else if (value === 'C') {
    handleClear();
  }
}

// Attach click listeners to all buttons
buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const val = e.target.dataset.value;
    routeInput(val);
  });
});

// Keyboard support
const keyMap = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
  Enter: '=',
  '=': '=',
  Escape: 'C',
  c: 'C',
  C: 'C',
};

document.addEventListener('keydown', e => {
  const key = e.key;
  if ((key >= '0' && key <= '9') || key === '.' || Object.keys(keyMap).includes(key)) {
    const mapped = keyMap[key] || key;
    routeInput(mapped);
    e.preventDefault();
  }
});

// Expose for testing/debugging
window.calculator = calculator;
window.compute = compute;
window.handleDigit = handleDigit;
window.handleOperator = handleOperator;
window.handleEquals = handleEquals;
window.handleClear = handleClear;
window.routeInput = routeInput;

// Initial display update
updateDisplay();
