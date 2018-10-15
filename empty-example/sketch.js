var circleX = 0;
var circleY = 0;
var circleZ = 100;

function setup() {
    createCanvas(700, 300);
}

function draw() {
    background(100);

    fill(250, 200, 200);
    ellipse(circleX, circleY, circleZ, 80);

    circleX ++;
    circleY ++;
    circleZ ++;

}
