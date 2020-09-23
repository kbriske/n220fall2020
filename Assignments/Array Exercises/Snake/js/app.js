/*
let posX = [0,0,0,0,0,0,0,0,0,0];
let posY = [0,0,0,0,0,0,0,0,0,0];

function setup() {
    createCanvas(700,700);
}

function draw() {
    background(255, 218, 117);
    circle(mouseX,mouseY,30);
}
*/
let positions = [0,0,0,0]; //the more you add the more trail the circle will have

function setup() {
    createCanvas(400,300);


}

function draw() {
    background(0);
    console.log(positions);

    positions.push(mouseX, mouseY);
    positions.shift();

    for(var i = 0; i < positions.length; i++) {
        circle(positions[i], 150,20);
    }
}