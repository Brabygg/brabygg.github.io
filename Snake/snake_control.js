let player = document.getElementById("tile1");

let isDead = false;

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
    if (isDead) return;

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

    newXPos = xPos + xUpdate;
    newYPos = yPos + yUpdate;

    if (newXPos > 0 && newXPos < 100)
        player.style.left = newXPos.toString() + '%';
    else
        Die();

    if (newYPos > 0 && newYPos < 100)
        player.style.top = newYPos.toString() + '%';
    else
        Die();

    console.log(newXPos + " | " + newYPos);
}

function Die() {
    isDead = true;
    player.dataset.xDir = 0;
    player.dataset.yDir = 0;

    let tiles = document.getElementsByClassName("tile");

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.padding = '0px';
    }

    player.style.left = '50%';
    player.style.top = '50%';
    player.style.backgroundColor = "black";
    player.style.color = "white";
    player.innerHTML = "Refresh to restart";
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