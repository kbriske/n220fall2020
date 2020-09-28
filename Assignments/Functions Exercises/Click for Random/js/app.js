let cirColor = ["111d5e", "c70039", "f37121", "ffbd69"];

function setup() {
    createCanvas(600,400);
    background(0);

}

function draw() {
    background(0);
    //fill(cirColor[i]);
    circle(mouseX, mouseY, 80);

}
/*
function mouseClick() {
    if(mouseClick == true) {
        fill(cirColor[i]);
        circle(mouseX, mouseY, 80);
    }
}
*/
for(i = 0; i >= cirColor.length; i++) {

function mousePressed() {
    if(mousePressed = true) {
        console.log(mousePressed);
        fill(cirColor[i]);
        circle(mouseX,mouseY, 80);
    }
    //console.log(mousePressed);
/*
    if(mousePressed == true) {
        fill(cirColor[i]);
        circle(mouseX,mouseY,80);
    }
    else {
        console.log("error");
    }
    */
}
}