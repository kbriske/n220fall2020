let cirColor = ["#111d5e", "#c70039", "#f37121", "#ffbd69"];

function setup() {
    createCanvas(600,400);
    background(0);
}

function draw() {
    background(0);
    circle(mouseX, mouseY, 80);
}

function mousePressed() {
        console.log(mousePressed);
        let i = random(cirColor);
        fill(i);
        circle(mouseX,mouseY, 80);
}
