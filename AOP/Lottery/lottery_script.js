const purchaseInput = document.getElementById("purchase_input");
const output = document.getElementById("output");



function CheckWin() {
    let winsCount = 3;
    let purchaseCount = purchaseInput.value;
    let numWins = 0;
    
    let wins = [
    "one trillion 1923 German marks",
    "one million US dollars (subject to 103% income tax)",
    "a year's supply of Earth air",
    "a spare kidney",
    "one aglet",
    "a castle made of the rarest material on Earth (tritium, which is gaseous at room temperature)",
    "a body pillow of a dragon",
    "one ticket for American Airlines Flight 11 in the morning of September 11th, 2001",
    "absolute vacuum",
    "ten particles of antimatter",
    "a monument to an evil dictator of your choice"
    ];

    if (purchaseCount > 50) {
        purchaseInput.value = 10;
        purchaseCount = 50;
    }
    if (!/^\d+$/.test(purchaseCount)) {
        purchaseInput.value = 1;
    }

    for (i = 0; i < purchaseCount; i++) {
        if (Math.floor(Math.random() * 100 + 1) <= winsCount) {
            numWins++;
            winsCount--;
        }
        if (winsCount == 0) {
            break;
        }
    }

    let randnum1 = Math.floor(Math.random() * wins.length);
    let randnum2 = Math.floor(Math.random() * wins.length);
    if (randnum2 === randnum1) {
        if (Math.random() >= 0.5 || randnum1 !== wins.length - 1)
            randnum2++;
        else
            randnum2--;
    }
    let randnum3 = Math.floor(Math.random() * wins.length);
    if ((randnum3 === randnum1 || randnum3 === randnum2)) {
        if (randnum3 === 1)
            randnum3 += Math.floor(Math.random() * 5) + 1;
        else
            randnum3 = Math.floor(randnum3 / 2);
    }

    console.log(randnum1, randnum2, randnum3);
    console.log(numWins);

    if (numWins === 1) {
        output.innerHTML = `You have won ${wins[randnum1]}.`;
    } else if (numWins === 2) {
        output.innerHTML = `You have won ${wins[randnum1]} and ${wins[randnum2]}.`;
    } else if (numWins === 3) {
        output.innerHTML = `You have won ${wins[randnum1]}, ${wins[randnum2]}, and ${wins[randnum3]}. Lucky bastard.`;
    } else {
        output.innerHTML = `You didn't win anything. Loser.`;
    }


}