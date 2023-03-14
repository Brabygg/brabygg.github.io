let player = document.getElementById("tile1");

player.dataset.xDir = 0;
player.dataset.yDir = 0;

document.addEventListener("keydown", HandleInput, false);

setInterval(UpdatePosition, 100)

function HandleInput(key) {
    if (key.code === "KeyW" && player.dataset.yDir !== '20') {
        player.dataset.xDir = 0;
        player.dataset.yDir = -20;
    }
    if (key.code === "KeyS" && player.dataset.yDir !== '-20') {
        player.dataset.xDir = 0;
        player.dataset.yDir = 20;
    }
    if (key.code === "KeyA" && player.dataset.xDir !== '20') {
        player.dataset.xDir = -20;
        player.dataset.yDir = 0;
    }
    if (key.code === "KeyD" && player.dataset.xDir !== '-20') {
        player.dataset.xDir = 20;
        player.dataset.yDir = 0;
    }
}

function UpdatePosition() {
    let xPos = Number.parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let xUpdate = Number.parseInt(player.dataset.xDir);
    let yPos = Number.parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let yUpdate = Number.parseInt(player.dataset.yDir);

    let newXPos = (xPos + xUpdate).toString();
    let newYPos = (yPos + yUpdate).toString();

    player.style.left = newXPos + 'px';
    player.style.top = newYPos + 'px';
}