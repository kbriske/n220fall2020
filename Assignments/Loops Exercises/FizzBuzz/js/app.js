count = 0;
y = 50
y2 = 41

//canvas creation
function setup() {
    createCanvas(1000,100);
}

function draw() {
    //background(211,241,255);
    while(count < 25) {
        count = count+1;
        console.log(count);
        fill(0);
        
        if(count%3 == 0 && count%5 == 0) {
        fill(52, 116, 235);
        square(count*20-9,y2,18); //count*20,y,18
        noFill();
        } else if(count%3 == 0) {
            fill(128, 52, 235);
            circle(count*20,y,18);
            noFill();
        } else if(count%5 == 0) { //issue is that it is placing the sqaure not relative to the circles
            fill(52, 235, 73);
            square(count*20-9,y2,18); //count*20,y,18
            noFill();
        }
        else {
            circle(count*20,y,18);
        }
    }
}



