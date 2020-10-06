
let velX = -2;
let velY = -2;

let paddle = {
    x: 390,
    y: 150,
    w: 10,
    h: 100,
    color: ("#2E294E"),
    update: function() {
        fill(this.color);
        rect(this.x, mouseY, this.w, this.h);
    }
}

let ball = {
    x: 200,
    y: 150,
    r: 30,
    color: ("#FFD400"),
    update: function() {
        fill(this.color);
        circle(this.x, this.y, this.r);
        ball.x = ball.x + velX;
        ball.y = ball.y + velY;
        if (ball.x <= 15) {
            velX = velX * -1;
        } else if ((ball.y <= 15) || (ball.y >= 385)) {
            velY = velY * -1;
        } else if (ball.x && ball.y === paddle.x && paddle.y) { //cant use becuase it is individual to function?
            velX = velX * -1;
            velY = velY * -1;
        }
    }
}

function setup() {
    createCanvas(400,400);
    background("#F1E9DA");
}

function draw() {
    background("#F1E9DA");
    paddle.update();
    ball.update();
}

//color: ("#32a88f"),