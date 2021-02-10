
function setup() {
    createCanvas(800,600);
    background(0);
}

function draw() {
    for(i = 1; i < 5; i++) {
        square(i*50,300,50);
        for(o = 1; o < 4; o++) {
            square(o*50,250,50)
            for(p = 1; p < 3; p++) {
                square(p*50,200,50)
                for(a = 1; a < 2; a++) {
                    square(a*50,150,50)
                }
            }
        }
    }
}


