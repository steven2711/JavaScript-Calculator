let oneBtn = document.getElementById('calc-one');
let twoBtn = document.getElementById('calc-two');
let threeBtn = document.getElementById('calc-three');
let fourBtn = document.getElementById('calc-four');
let fiveBtn = document.getElementById('calc-five');
let sixBtn = document.getElementById('calc-six');
let sevenBtn = document.getElementById('calc-seven');
let eightBtn = document.getElementById('calc-eight');
let nineBtn = document.getElementById('calc-nine');
let zeroBtn = document.getElementById('calc-zero');


let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');

let calcNumBtns = document.getElementsByClassName('calc-btn-num');
let calcOperatorsBtn = document.getElementsByClassName('calc-btn-operator');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];


let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (displayVal === '0') {
        displayVal = '';
    };

    displayVal += btnText;
    displayValElement.innerText = displayVal;
};

let performOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('+');
        break;

        case '-':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('-');
        break;

        case 'x':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('*');
        break;

        case '÷':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
        break;

        case '=':
        evalStringArray.push(displayVal);
        let evaluation = eval(evalStringArray.join(' '));
        if (evaluation > 999999) {
            displayValElement.innerText = 'too big';
            displayVal = '0'
            evalStringArray = [];
        } else {
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
        };
        
        
        break;
    
        default:
        displayValElement.innerText = 'Error';
            break;
    };



};



for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
};

for (let i = 0; i < calcOperatorsBtn.length; i++) {
    calcOperatorsBtn[i].addEventListener('click', performOperation, false);
};


clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = displayVal;
};

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    
    if (displayVal === '') {
        displayVal = '0';      
    };

    displayValElement.innerText = displayVal;
    
};

decimalBtn.onclick = () => {
    if (!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
};



// 1. Add the ability to see the operation during input