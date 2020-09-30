let moonX = 350; //moon X coordinate
let moonY = 200; //moon Y coordinate

function setup() { //sets up canvas
    createCanvas(700,400);
    background(5,0,28);
}

function draw() { //draws the moon
    background(5,0,28);
    drawMoon("#e3e3e3",mouseX,mouseY);
    stroke(5,0,28);
    drawMoon("#05001c",mouseX-20,mouseY-10); 

    if(mouseX >= 350) { //if the mouse x coordinate makes it halfway across the page, it will switch to a new background/object
        background(143, 225, 255);
        drawSun("#ffd452",mouseX,mouseY);
    }
}

function drawMoon(moonColor,heightX,heightY) { //function for the moon
    fill(moonColor);
    circle(heightX, heightY,70);
}

function drawSun(sunColor, heightX, heightY) { //function for the sun
    fill(sunColor);
    circle(heightX, heightY, 70);
}
