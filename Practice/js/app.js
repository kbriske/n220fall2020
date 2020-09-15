let timer = 5;
function setup() {
    createCanvas(400,400);
    background(0);
    frameCount = (0);
    frameRate = (30);
}


function draw() {
    background(0);
    if (frameCount % 60 == 0 && timer > 0) {
        fill(66, 25, 250);
        circle(mouseX,mouseY,30); 
    }
    else {
        fill(255, 25, 33);
        circle(mouseX,mouseY,30);
    }
}

