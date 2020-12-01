class Particle {

    x = Math.random() * 1375;
    y = Math.random() * 700;
    velocity = {x: 1 - Math.random() * 1.5, y: -2};
    gravity = .05;
    color = [Math.random() * 255, 100, 100];

    update() {
        noStroke();
        fill(this.color);
        circle(this.x, this.y, 10);
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.gravity;

        if(this.y >= 700) {
            this.velocity.y *= -.75;
        }
    }
}

let p = new Particle();
let particles = [];

function setup() {
    createCanvas(1375,700);
    for(i = 0; i < 500; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    background(51);
    for(i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}