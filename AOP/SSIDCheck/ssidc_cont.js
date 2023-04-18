let input_ok;
let inputValue;

function ValidateInput() {
    input_ok = false;
    inputValue = document.getElementById("input_field").value;
    let output = document.getElementById("output");
    let contVal = 0;

    let inputChars = parseInput(inputValue, 10);

    if (!input_ok) {
        output.innerHTML = "Felaktig inmatning, se till att den enbart består av 10 siffror";
        return;
    }
    
    for (let i = 0; i < 10; i += 2) {
        inputChars[i] *= 2;
        console.log(inputChars[i] + " | ID = " + (i + 1));
    }

    for (let i = 0; i < 9; i++) {
        contVal += Number.parseInt(inputChars[i]);
    }

    console.log("Control sum is " + contVal);

    let contNumArr = splitContNum(contVal);
    let contNumTens;
    let finalContNum;

    if (Number.parseInt(contNumArr[1]) === 0) {
        contNumTens = Number.parseInt(contNumArr[0]) * 10;
    }
    else {
        contNumTens = (Number.parseInt(contNumArr[0]) + 1) * 10;
    }

    finalContNum = contNumTens - contVal;

    if (finalContNum !== 0) {
        finalContNum -= 1;
    }

    console.log("Final desired value is " + finalContNum);

    if (finalContNum === Number.parseInt(inputChars[9])) {
        output.innerHTML = "Personnumret är GILTIGT"
    }
    else {
        output.innerHTML = "Personnumret är OGILTIGT"
    }
}

function parseInput(input) {
    if (input.length !== 10) return;
    console.log("Length OK");
    if (!/^\d+$/.test(input)) return; //Apparently checks if a string is exclusively numeric
    console.log("Chars OK")
    input_ok = true;

    return input.split('');
}

function splitContNum(input) {
    let output = input.toString();
    return output.split('');
}