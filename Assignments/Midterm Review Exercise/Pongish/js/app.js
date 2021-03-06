
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
        rect(this.x, mouseY, this.w, this.h);
        this.y = mouseY; //sets the y coordinate of paddle to the mouseY position for the rest of the object's purposes, reference as this.y
        if(this.y <= 0) {
            this.y = 0;
        } else if (this.y >= 400 - this.h) {
            this.y = 400 - this.h;
        }
        rect(this.x, this.y, this.w, this.h); //adjusts the paddle to not go below the bottom boundary
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
        if ((ball.y <= 15) || (ball.y >= 385)) { //if ball hits the top or bottom of the canvas, bounce
            velY = velY * -1;
        } else if ((ball.x <= 0) || (ball.x >= 400)) { //if ball exceeds the right or left side of the canvas, reset
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

    if(hitTest(paddle.x, mouseY, paddle.w, paddle.h, ball.x + 15, ball.y + 15)) { //if it is true (implied)
        velX = velX * -1;
        velY = random(-2,-4); //randomizes the y velocity to change things up
    }
    if(hitTest(paddle2.x, paddle2.y, paddle2.w, paddle2.h, ball.x - 15, ball.y - 15)) {
        velX = velX * -1;
        velY = random(-2,-4); //randomizes the y velocity to change things up
    }
    console.log(velY);
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