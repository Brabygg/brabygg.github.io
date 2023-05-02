let selector = document.getElementById('selector');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let output = document.getElementById('output');

setPlaceholders();
selector.addEventListener('change', setPlaceholders);

function setPlaceholders() {
    if (selector.value === 'h') {
        input1.placeholder = 'c1';
        input2.placeholder = 'c2';
    }
    else if (selector.value === 'c1') {
        input1.placeholder = 'h';
        input2.placeholder = 'c2';
    }
    else if (selector.value === 'c2') {
        input1.placeholder = 'h';
        input2.placeholder = 'c1';
    }
}

function Execute() {
    if (isNaN(input1.value) || isNaN(input2.value) || input1.value <= 0 || input2.value <= 0) {
        output.innerHTML = 'Inputs must be filled, numeric, and greater than 0.';
        return;
    }

    if (selector.value === 'h') {
        hCalc();
    }
    else if (selector.value === 'c1') {
        c1Calc();
    }
    else if (selector.value === 'c2') {
        c2Calc();
    }
}

function hCalc() {
    let c1 = input1.value;
    let c2 = input2.value;

    c1 *= c1;
    c2 *= c2;

    let h = c1 + c2;
    h = Math.sqrt(h);

    output.innerHTML = `h = ${h}`
}
function c1Calc() {
    let h = input1.value;
    let c2 = input2.value;

    h *= h;
    c2 *= c2;

    if (c2 >= h) {
        output.innerHTML= 'c2 must be smaller than h.';
        return;
    }

    let c1 = h - c2;
    c1 = Math.sqrt(c1);

    output.innerHTML = `c1 = ${c1}`
}
function c2Calc() {
    let h = input1.value;
    let c1 = input2.value;

    h *= h;
    c1 *= c1;

    if (c1 >= h) {
        output.innerHTML = 'c1 must be smaller than h.';
        return;
    }

    let c2 = h - c1;
    c2 = Math.sqrt(c2);

    output.innerHTML = `c2 = ${c2}`
}