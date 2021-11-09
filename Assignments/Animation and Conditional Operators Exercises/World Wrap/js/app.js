x = 200;

function setup(){
    createCanvas(800,600);
    background(0);
}

function draw () {
    background(0)
    circle(x,150,30)
    x = x + 5;
    
    if (x > 800){
        x = 0;
    }
}

