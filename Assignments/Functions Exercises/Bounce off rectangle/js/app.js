let circleX = 0;
let circleY = 100;
let rectX = 375;
let rectY = 550;
let rectW = 150;
let rectH = 30;
velX = 5;
velY = 5;

function setup() {
    createCanvas(900,600);
    background(0);
}

function draw() {
    background(0);
    circle(circleX,circleY,30);
    circleX = circleX + velX;
    circleY = circleY + velY;
    rect(rectX,rectY,rectW, rectH);

    if(collideRect(circleX,circleY + 15,rectX,rectY,rectW,rectH)) {
        velY = velY * -1;
    }
        
    if((circleX >= 900) || (circleY >= 600)) {
        circleX = 0;
        circleY = 100;
        velY = 5;
    }
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
    //assume no hit
    var colliding = false;
    //test for hit
    if((circleX > rectX) && (circleX < rectX + rectW)) {
        if((circleY > rectY) && (circleY < rectY + rectH)) {
              colliding = true;
        }
   }
   return colliding;
}   


