let positionY = [0,0,0,0,0];
let positionX = [0,0,0,0,0];
let colors = ["#abc8ff", "#ebf2ff"];

function setup() {
    createCanvas(700,400);
}

function draw() {
    background(colors[0]);

    positionY.push(mouseX);
    positionY.shift();

    for(var i = 0; i < positionY.length; i++) {
        fill(colors[1]);
        circle(350, positionY[i], 25);
        if(positionY[i] <= 400) {
            positionY[i] = positionY[i] - 5;
        }
        console.log(positionY[i]);
    }
}
