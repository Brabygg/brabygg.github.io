let valueInput = document.getElementById('value_input');
let denomInput = document.getElementById('purchase_input');
let output = document.getElementById('output');

let denomArray = [];

document.addEventListener('keydown', handleInputs, false);

function handleInputs(input) {
    if (input.key != 'Enter') return;
    
    if (!/^\d+$/.test(valueInput.value) || !/^\d+$/.test(denomInput.value)) {
        output.innerHTML = 'Currency tends to be written in numbers.'
        return;
    }
    if (Number.parseInt(valueInput.value) > Number.parseInt(denomInput.value)) {
        output.innerHTML = 'Most places do not allow exchanges for more money than you give them.'
        return;
    }
    calculate(Number.parseInt(denomInput.value) - Number.parseInt(valueInput.value));

    displayResult();
}

function exchange(value, exchangeTo) {
    return Math.floor(value / exchangeTo);
}
function calcMod(value, exchangeTo) {
    return value % exchangeTo;
}

function calculate(remainToCalc) {
    let denomNum;
    let remain;

    denomArray = [];

    //1000
    denomNum = exchange(remainToCalc, 1000);
    remain = calcMod(remainToCalc, 1000);

    denomArray.push(denomNum);

    if (remain === 0) return;

    //500
    denomNum = exchange(remain, 500);
    remain = calcMod(remain, 500);

    denomArray.push(denomNum);

    if (remain === 0) return;

    //100
    denomNum = exchange(remain, 100);
    remain = calcMod(remain, 100);

    denomArray.push(denomNum);

    if (remain === 0) return;

    //50
    denomNum = exchange(remain, 50);
    remain = calcMod(remain, 50);

    denomArray.push(denomNum);

    if (remain === 0) return;

    //10
    denomNum = exchange(remain, 10);
    remain = calcMod(remain, 10);

    denomArray.push(denomNum);

    if (remain === 0) return;

    //5
    denomNum = exchange(remain, 5);
    remain = calcMod(remain, 5);

    denomArray.push(denomNum);

    if (remain === 0) return;

    //1
    denomArray.push(remain);
}

function displayResult() {
    if (denomArray.length < 7) {
        for (var i = denomArray.length; i < 7; i++) {
            denomArray.push(0);
        }
    }

    output.innerHTML = `
    Your change back in notes:
    <br><br>${denomArray[0]} one ks
    <br><br>${denomArray[1]} fivehundreds
    <br><br>${denomArray[2]} hundreds
    <br><br>${denomArray[3]} fifties
    <br><br>${denomArray[4]} tens
    <br><br>${denomArray[5]} fives
    <br><br>${denomArray[6]} singles
    `
}