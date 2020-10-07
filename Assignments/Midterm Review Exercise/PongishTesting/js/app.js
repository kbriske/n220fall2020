let velX = -3;
let velY = -3;

let paddle = {
    x: 390,
    y: 150,
    w: 10,
    h: 100,
    color: ("#20A39E"),
    update: function() {
        fill(this.color);
        stroke(this.color);
        this.y = mouseY;
        rect(this.x, this.y, this.w, this.h);
        if(this.y <= 1) {
            this.y = 1;
        } else if (this.y >= 400 - this.h) {
            this.y = 400 - this.h; //I need this to limit mouseY's direction
        }
        rect(this.x, this.y, this.w, this.h);
    }
}
//uses W and S, requires change from mouseY to paddle.y on line 103
/*
let paddle = {
    x: 390,
    y: 150,
    w: 10,
    h: 100,
    color: ("#EF5B5B"),
    update: function() {
        fill(this.color);
        stroke(this.color);
        rect(this.x, this.y, this.w, this.h);
        if (keyIsDown(87)) {
            this.y -=5;
        } else if (keyIsDown(83)) {
            this.y +=5;
        }
        if(this.y <= 0) {
            this.y = 0;
        } else if (this.y >= 400 - this.h) { //when to use nested ifs vs else ifs, I know that else ifs only run if the initial ifs conditions are not met
            this.y = 400 - this.h;
        }
    }
}
*/
let paddle2 = {
    x: 0,
    y: 150,
    w: 10,
    h: 100,
    color: ("#EF5B5B"),
    update: function() {
        fill(this.color);
        stroke(this.color);
        rect(this.x, this.y, this.w, this.h);
        if (keyIsDown(UP_ARROW)) {
            this.y -=5;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.y +=5;
        }
        if(this.y <= 0) {
            this.y = 0;
        } else if (this.y >= 400 - this.h) { //when to use nested ifs vs else ifs, I know that else ifs only run if the initial ifs conditions are not met
            this.y = 400 - this.h;
        }
    }
}

let ball = {
    x: 200,
    y: 90,
    r: 30,
    color: ("#C5FFFD"),
    update: function() {
        fill(this.color);
        stroke(this.color);
        circle(this.x, this.y, this.r);
        ball.x = ball.x + velX;
        ball.y = ball.y + velY;
        if (ball.x <= 15) { //if ball hits the left side of the canvas, bounce
            velX = velX * -1;
        } else if ((ball.y <= 15) || (ball.y >= 385)) { //if ball hits the top or bottom of the canvas, bounce
            velY = velY * -1;
        } else if (ball.x >= 400) { //if ball exceeds the right side of the canvas, reset
            ball.x = 200, ball.y = 90, velX = -3, velY = -3;
        }
    }
}

function setup() {
    createCanvas(400,400);
    background("#FFBA49");
}

function draw() {
    background("#FFBA49");
    paddle.update(); 
    paddle2.update();
    ball.update();
    if(hitTestObject(paddle,ball)) { //if it is true (implied)
        velX = velX * -1; 
        velY = random(-2,-4); //changed from -1
    }
    if(hitTestObject(paddle2,ball)) {
        velX = velX * -1;
        //velY = velY * 1; //changed from -1
        
        //velX = velX * random(-1,-2);
        velY = random(-2,-4);
    }
    console.log(velY);
}
function hitTestObject(paddle,ball) {
    var hit = false;
    if((ball.x + 15 >= paddle.x) && (ball.y >= paddle.y)) { //if ball is past x and y bounds of the left side of rect
        if((ball.x -15 <= paddle.x + paddle.w) && (ball.y <= paddle.y + paddle.h)) {
            hit = true;
        }
    }
    return hit;
}
/*
}
function hitTest(paddleX, paddleY, paddleW, paddleH, ballX, ballY) {
   var hit = false;
    if((ballX >= paddleX) && (ballY >= paddleY)) {
        if((ballX <= paddleX + paddleW) && (ballY <= paddleY + paddleH)) {
            hit = true;
        }
    }
    return hit;
}
*/
