/*
//Loop Practice----------
let timer = 5;
function setup() {
    createCanvas(400,400);
    background(0);
    frameCount = (0);
    frameRate = (30);
}


function draw() {
    background(0);
    if (frameCount % 60 == 0 && timer > 0) {
        fill(66, 25, 250);
        circle(mouseX,mouseY,30); 
    }
    else {
        fill(255, 25, 33);
        circle(mouseX,mouseY,30);
    }
}
*/

/*
function setup() {
    createCanvas(500,500);
    background(0);
}

//Array Practice----------

//let colorArray = ["perrywinkle", "violet"];
//console.log(colorArray[0]); //will write perrywinkle
//console.log("you can write text here: ". colorArray[0]);


for(var i = 0; i < 2; i++) {
    //console.log(i);
    console.log(colorArray[i]);

}


//or


for(i=0; i < colorArray.length; i++) {
    console.log(colorArray[i]);
}
*/

//More Array Practice----------
/*
let colors = ["#fcba03", "#0367fc"];

function setup() {
    createCanvas(500,500);


for(var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    circle(30*i+30, 200, 20);
    }
}
*/
/*
let positions = [0,0,0,0]; //the more you add the more trail the circle will have

function setup() {
    createCanvas(400,300);


}

function draw() {
    background(0);
    console.log(positions);

    positions.push(mouseX);
    positions.shift();

    for(var i = 0; i < positions.length; i++) {
        circle(positions[i], 150,20);
    }
}
*/
//FUNCTIONS-------------------------------------------------------------------
/*
let sunX = 40;
function setup() {
    createCanvas(400,300);
    background(100);

}

function draw() {
    background(100);
    sunX++;
    drawSun("#ffbd08",21,mouseY, mouseX);
}

function drawSun(sunColor, numRays, yHeight, xHeight) {
    console.log(sunColor);
    fill(sunColor);
    stroke(sunColor);
    for(var i = 0; i < numRays; i++) {
        line(xHeight,yHeight,i*20,300);

    }
    circle(xHeight,yHeight,40);
}
*/
var functionResult = isEven(2);
console.log(functionResult);

function isEven(amount) {
    let result = amount % 2 == 0;
    return result;
    // can also be written as return amount % 2 == 0;
}