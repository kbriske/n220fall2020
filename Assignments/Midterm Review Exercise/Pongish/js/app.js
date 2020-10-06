//DONT FORGET TO SEE IF IT IS OKAY TO ALLOW IT TO RESET AFTER GOING OFF THE LEFT PANEL
let velX = -2;
let velY = -2;

let paddle = {
    x: 390,
    y: 150, //why can I not make this mouseY?
    w: 10,
    h: 100,
    color: ("#20A39E"),
    update: function() {
        fill(this.color);
        stroke(this.color);
        rect(this.x, mouseY, this.w, this.h);
        if(this.y <= 0) {
            this.y = 0;
        } else if (this.y >= 400 - this.h) {
            this.y = 400 - this.h; //I need this to limit mouseY's direction
        }
        //console.log(mouseY);
    }
}

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
            ball.x = 200, ball.y = 90, velX = -2, velY = -2;
        }
        //console.log("y: " + ball.y);
    }
}

function setup() {
    createCanvas(400,400);
    background("#FFBA49");
}

function draw() {
    background("#FFBA49");
    paddle.update(); //why is this green? (because of the if statements?)
    paddle2.update();
    ball.update();
    if(hitTest(paddle.x, mouseY, paddle.w, paddle.h, ball.x + 15, ball.y + 15)) { //if it is true (implied)?
        velX = velX * -1; //how can I add some deviation (see below)
        velY = velY * -1; 
    }
    if(hitTest(paddle2.x, paddle2.y, paddle2.w, paddle2.h, ball.x - 15, ball.y - 15)) {
        velX = velX * -1;
        velY = velY * -1; 
        /*
        velX = velX * random(-1,-2);
        velY = velY * random(-1,-2); 
        */
    }
   /*
    if(ball.x.intersects(paddle.x)) {
        velX = velX * -1;
        velY = velY * -1; 
    }
    */
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