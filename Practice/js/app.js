function setup() {
    createCanvas(400,400);
}


function draw() {
    background(220);
    console.log(mouseX,"x");
    console.log(mouseY,"y");

circle(mouseX, mouseY, 40);
}
if(mouseX, mouseY > 200){
    fill("yellow")
}
