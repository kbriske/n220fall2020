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



//MIDTERM EXAMINATION CODE

var ball = { //creates an object named ball
    x: 100, //sets the x position to 100
    y: 100, //sets the y position to 100
    velocityX: 2, //sets the x velocity to 2
    velocityY: 2, //sets the y velocity to 2
    update: function() { //updates function with parameters/conditionals listed below
        noFill(); //no fill
        stroke(255,238,130); //creates a light yellow stroke
        circle(this.x,this.y,10) //creates a circle at the x,y variables already specified, could also create a variable for radius
        ball.x += this.velocityX;
        ball.y += this.velocityY;
    }
};

var paddle = { //creates an object named paddle
    x: 100, //sets the x position to 100
    y: 350, //sets the y position to 350
    w: 150, //sets the width of the rectangle to 150
    h: 20, //sets the height of the rectangle to 20
    update: function() { //updates function with parameters/conditionals listed below
        noFill(); //no fill
        stroke(143,251,255); //creates a light blue stroke
        rect(this.x,this.y,this.w,this.h); //creates a rectangle at the x,y,w,h from the variables already specified
        if(keyIsDown(LEFT_ARROW)) { //checks to see if the left arrow key is down
            this.x -=2; //if it is, the paddle will move to the left
        }
        if(keyIsDown(RIGHT_ARROW)) { //checks to see if the right arrow key is down
            this.x +=2; //if it is, the paddle will move to the right
        }
    }
};

var blocks = []; //creates an array named blocks, *however it doesnt seem to have any parameters inside 

for(var i = 0; i < 6; i++) { //creates a for loop that initializes a variable named i, and as long as i is less than 6, add one to i
    blocks[i] = {x: i*60, y: 10}; //while the for loop is running, create the variable blocks with an x pos. at i*60 and a y pos. at 10
} //in total, should create 6 blocks

function setup() { //is the foundation for the setup of the canvas to display content
    createCanvas(400,400); //creates a canvas 400 pixels wide and 400 pixels high
}

function draw() { //draw function will actually allow objects and other things to be drawn on the canvas
    background(70); //creates a gray background
    
    //updating objects in the draw function so they will show up on the canvas
    ball.update(); //invokes the ball object to update in the draw function
    paddle.update(); //invokes the paddle object to update in the draw function

    //setting up conditionals for our objects for when they interact
    if(ball.x > 395) { //if the x position of ball exceeds 400
        ball.x= 395; //set the x position of ball to 400
        ball.velocityX *=-1; //multiply the x velocity of ball to -1, which will make it bounce
    }

    if(ball.x < 5) { //if the x position of ball goes below 0
        ball.x = 5; //set the x position of ball to 0
        ball.velocityX *=-1; //mulitply the x velocity of ball to -1, which will make it bounce
    }

    if(ball.y < 5) { //if the y position of ball goes below 0 (top of screen)
        ball.y = 5; //set the y position of ball to 0
        ball.velocityY *=-1; //multiply the y velocity of ball to -1, which will make it bounce
    }

    //setting up a hit test for ball and paddle, this will run automatically if hitTestPoint returns true
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h)) { //if hitTestPoint returns true, run this if statement
        ball.velocityY *=-1 //multiply the y velocity of ball by -1, which will make it bounce
    }

    //creating a for loop to draw blocks onto the canvas
    for(var i = 0; i < blocks.length; i++) { //intialize i as a variable, while i is less than the length of the blocks array, add one to i
        var b = blocks[i]; //sets variable b to the blocks array with i as the parameter, so it will iterate through until the loop is done
        rect(b.x,b.y,60,20); //creates a rectangle at variable b's x/y position and sets width/height to 60 and 20 respectively
    }
    
    //setting up a hit test for ball and blocks, this will run automatically if hitTestPoint returns true
    if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) { //if hitTestPoint returns true, run this if statement
        ball.velovityY *=-1; //multiply the y velocity of ball by -1, which will make it bounce

    }

    //remove block from array
    blocks.splice(i,1); //must be a built in function, should remove the block wherever i is in the loop and y position of 1?

    //hit test function
    function hitTestPoint(px, py, bx, by, bw, bh) { //sets the variables for the function
        if((px > bx) && (px < bx + bw)) { //if the xpos of p is greater than that of b AND xpos is less than that of the x/width of b 
            if((py > by) && (py < by + bh)) { //if the ypos of p is greater than that of b AND ypos is less than that of y/height of b
                return true; //return true
            }
        }
    }
    return false; //returns false, if this is the case the conditional statments on lines 278 & 289 will not run
}
