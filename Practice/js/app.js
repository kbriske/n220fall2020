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
    sunX = 0;
}

function draw() {
    background(100);
    sunX++;
    drawSun("#fcda51",21,mouseY - 10, sunX - 10);
    drawSun("#293452",21,mouseY, sunX);
    if(sunX >= 400) {
        sunX = 40;
    }
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
/*
var functionResult = isEven(2);
console.log(functionResult);

function isEven(amount) {
    let result = amount % 2 == 0;
    return result;
    // can also be written as: return amount % 2 == 0;

}
*/
//IN CLASS PRACTICE
/*
function addNum(i,o) {
    return i*o;
}
result = addNum(3,5);
result = result*2;
console.log(result);
*/

//OBJECTS-------------------------------------------------------------------
/*
let glasses = {
    make: "Warby Parker",
    model: "Haskell",
    lense: "Blue-light filtering",
    material: "Crystal",
    weight: 25
};
console.log(glasses); //shows the contents of the object
console.log(glasses.model); //shows specific contents of the object
glasses.weight = glasses.weight - 5;
console.log("weight of glasses: " + glasses.weight);
*/

//MORE OBJECT STUFF
/*
var myCircle = {
    x: 20,
    y: 30,
    r: 15,
    color: [156,0,250],
    update: function() {
        fill(this.color);
        this.x += 2;
        circle(this.x,this.y,this.r);
    }
}

function setup() {
    createCanvas(400,300);
}

function draw() {
    myCircle.update();
}
*/

//MORE MORE OBJECT STUFF
/*
var circles = [
    {x: 100, y: 20, r: 5},
    {x: 20, y: 50, r: 50},
    {x: 150, y: 200, r: 25},
    {x: 300, y: 250, r: 100}
];

console.log(circles[2].y);

function setup() {
    createCanvas(400,300);
    noStroke();
    fill(200);
}

function draw() {
    for(var i = 0; i < circles.length; i++) {
        let currentCircle = circles[i]; //if you want to be able to reference the object easily 
        circle(currentCircle.x, currentCircle.y, currentCircle.r);
        //circle(circles[i].x, circles[i].y, circles[i].r); original code
        currentCircle.y += 2;

        if(currentCircle.y > 300) {
            currentCircle.x = Math.random() * 400
            currentCircle.y = 0;
            fill(Math.random() * 224);
        }
    }
}
*/