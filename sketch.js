function setup() {
    createCanvas(600, 400);
}

function draw() {

    let myRed = 128;
    let myGreen = 64;
    let myBlue = 255;
    let circleSize = 80;

    if (mouseIsPressed) {
        fill(Math.random() * myRed, Math.random() * myGreen, Math.random() * myBlue);
    } else {
        fill(Math.random() * myRed, Math.random() * myGreen, Math.random() * myBlue);
    }
    ellipse(mouseX, mouseY, circleSize, circleSize);
}

// function random() {
//     console.log('my random');
//     return 1;
// }