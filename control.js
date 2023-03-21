let player = document.getElementById("tile1");

let xPercentFactor = Number.parseInt(window.getComputedStyle(player).getPropertyValue('left'));
let yPercentFactor = Number.parseInt(window.getComputedStyle(player).getPropertyValue('top'));
xPercentFactor /= 50;
yPercentFactor /= 50;

//These need to be global as they are used in multiple methods
let newXPos = 50;
let newYPos = 50;

player.dataset.xDir = 0;
player.dataset.yDir = 0;

document.addEventListener("keydown", HandleInput, false);

setInterval(UpdatePosition, 100)
setInterval(RecalculateScreenSize, 10);

function HandleInput(key) {
    if (key.code === "KeyW" && player.dataset.yDir !== '1') {
        player.dataset.xDir = 0;
        player.dataset.yDir = -2;
    }
    if (key.code === "KeyS" && player.dataset.yDir !== '-1') {
        player.dataset.xDir = 0;
        player.dataset.yDir = 2;
    }
    if (key.code === "KeyA" && player.dataset.xDir !== '1') {
        player.dataset.xDir = -1;
        player.dataset.yDir = 0;
    }
    if (key.code === "KeyD" && player.dataset.xDir !== '-1') {
        player.dataset.xDir = 1;
        player.dataset.yDir = 0;
    }
}

function UpdatePosition() {
    let xPos = Number.parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    xPos /= xPercentFactor;
    let xUpdate = Number.parseInt(player.dataset.xDir);
    let yPos = Number.parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    yPos /= yPercentFactor;
    let yUpdate = Number.parseInt(player.dataset.yDir);

    newXPos = (xPos + xUpdate).toString();
    newYPos = (yPos + yUpdate).toString();

    if (newXPos !== 0) {
        player.style.left = newXPos + '%';
    }
    else {
        console.log("Balls");
    }

    if (newYPos !== 0) {
        player.style.top = newYPos + '%';
    }
    else {
        console.log("Balls");
    }

    console.log(newXPos + " | " + newYPos);

    CheckDeath();
}

function CheckDeath() {
    if (newXPos === 0 || newXPos === 100 || newYPos === 0 || newYPos === 100) {
        console.log("AAAAA");
    }
}

function RecalculateScreenSize() {
    if (newXPos === 0 || newYPos === 0) return;

    let xPFTemp = Number.parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let yPFTemp = Number.parseInt(window.getComputedStyle(player).getPropertyValue('top'));

    xPFTemp /= newXPos;
    yPFTemp /= newYPos;

    xPercentFactor = xPFTemp;
    yPercentFactor = yPFTemp;
}