function setup() {
    createCanvas(600,600);
    background(211,211,211);
}

function draw() {
    for(i = 1; i < 50; i++) {
        noFill();
        circle(300,300,i*10)
    }
    
}