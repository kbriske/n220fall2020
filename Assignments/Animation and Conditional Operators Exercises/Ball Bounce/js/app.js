x = 400;
y = 300;
velX = 3
velY = 3

function setup(){
    createCanvas(800,600);
    background(0);
}

function draw(){
    background(0);
    circle(x,y,100);
    x = x + velX;
    y = y + velY;
    
    if (y > 550){
        velY = velY * -1;
    }

    if (x > 750){
        velX = velX * -1;
    }

    if(y < 50){
        velY = velY * -1;
    }
    
    if(x < 50){
        velX = velX * -1;
    }
}