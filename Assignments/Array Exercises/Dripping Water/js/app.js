let position = [0,0,0,0,0];
let colors = ["#abc8ff", "#ebf2ff"];

function setup() {
    createCanvas(700,400);
}

function draw() {
    background(colors[0]);

    position.push(mouseX);
    position.shift();

    for(var i = 0; i < position.length; i++) {
        fill(colors[1]);
        circle(350, position[i], 25);
        if(position[i] <= 400) {
            position[i] = position[i] - 5;
        }
        console.log(position[i]);
    }
}
