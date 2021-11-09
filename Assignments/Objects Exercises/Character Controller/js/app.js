
let character = {
    x: 250,
    y: 250,
    r: 40,
    color: ("#BBADFF"),
    stroke: ("#C5D5E4"),
    update: function() {
        fill(this.color);
        stroke(this.stroke);
        circle(this.x, this.y, this.r);
    }
}

function setup() {
    createCanvas(500,500);
    background("#C5D5E4");
}

function draw() {
    background("#C5D5E4");
    character.update();
    if(keyCode == LEFT_ARROW) {
        character.x -=5;
    } else if (keyCode == RIGHT_ARROW) {
        character.x +=5;
    } else if (keyCode == UP_ARROW) {
        character.y -=5;
    } else if (keyCode == DOWN_ARROW) {
        character.y +=5;
    }
}
//"#391463" persian indigo
//"#C5D5E4" beau blue