let positionY = [16,150,201,81,345];
let positionX = [120,330,250,610,400];
let colors = ["#abc8ff", "#ebf2ff"];
py = 0;

function setup() {
    createCanvas(700,400);
}

function draw() {
    background(colors[0]);

    for(var i = 0; i < positionX.length; i++) {
    fill(colors[1]);
    py++;
        circle(positionX[i], py, 25);
        if(positionY[i] <= 400) {
            positionY[i] = positionY[i] - 5;
        }
        if (py >= 400) {
            py = 0;
        }
        console.log(positionY[i]);
    }
}
