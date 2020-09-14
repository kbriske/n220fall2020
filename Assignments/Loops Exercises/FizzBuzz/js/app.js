count = 0;
x = 50
y = 50

/*function setup() {
    background(0);
}*/

function draw() {
    createCanvas(800,600);
    background(211,241,255);
    circle(x,y,99);
    x = x + 2;
}


while(count < 25) {
    count = count+1;
    console.log(count);
    //circle(x,y,30);
}
