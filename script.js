function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = '';
    }
    if (value === '.' && !display.innerText.includes('.')) {
        display.innerText += value;
    } else if (value !== '.') {
        display.innerText += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch {
        display.innerText = 'Error';
        setTimeout(() => display.innerText = '0', 1500);
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function eraseLast() {
    const display = document.getElementById('display');
    const currentText = display.innerText;
    display.innerText = currentText.slice(0, -1) || '0';
}