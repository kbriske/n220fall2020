
//object (wireless charger)
let charger = {
    x: 200,
    y: 150,
    r: 120,
    color: [54,54,54],
    color2: [74,74,74],
    /*
    update: function() {
        fill(this.color);
        circle(this.x,this.y,this.r);
    }
    */
}

//object (cord)
let cord = {
    x: 0,
    y: 150,
    w: 50,
    h: 100,
    color: [255,255,255],
    update: function() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
}

function setup() {
    createCanvas(400,300);
    background(0);
}

function draw() {
    fill(charger.color);
    circle(charger.x, charger.y, charger.r);
    fill(charger.color2);
    circle(charger.x,charger.y, charger.r - 10);

    charger.update(); //updates object on screen
    cord.update();
}
