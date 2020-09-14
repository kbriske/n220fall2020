count = 0;
x = 50
y = 50
y2 = 41

//canvas creation
function setup() {
    createCanvas(800,600);
}

function draw() {
    //background(211,241,255);
    while(count < 25) {
        count = count+1;
        console.log(count);
        circle(count *20,y,18);
        if(count%3 == 0) {
            fill(128, 52, 235);
            circle(count*20,y,18);
            noFill();
        }
        if(count%5 == 0) { //issue is that it is placing the sqaure not relative to the circles
            fill(52, 235, 73);
            square(count*20,y2,18); //count*20,y,18
            noFill();
        }
        if(count%3 == 0 && count%5 == 0) {
            fill(52, 116, 235);
            square(count*20,y2,18); //count*20,y,18
            noFill();
        }
    }
}



