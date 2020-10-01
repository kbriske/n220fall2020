//object (wireless charger)
let charger = {
    x: 200,
    y: 150,
    r: 120,
    color: [54,54,54],
    color2: [74,74,74],
    update: function() {
        fill(this.color);
        /*
        this.color[0] +=1;
        console.log(this.color[0]);
        */
        stroke(this.color);
        circle(this.x,this.y,this.r);
        fill(charger.color2);
        stroke(this.color2);
        circle(charger.x,charger.y, charger.r - 12);
    }
}

//object (cord)
let cord = {
    x: 197,
    y: 0,
    w: 6,
    h: 90,
    color: [54,54,54],
    update: function() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
}

let phone = {
    w: 65,
    h: 130,
    cr: 10, //corner radius
    color: [57,57,57],
    color2: [0,0,0],
    update: function() {
        fill(this.color);
        rect(mouseX,mouseY,this.w,this.h,this.cr);
        fill(this.color2); //fill for phone screen
        rect(mouseX+4,mouseY+3,this.w-8,this.h-7,this.cr);
        console.log("x: " + mouseX);
        console.log("y: " + mouseY);
    }
}

function setup() {
    createCanvas(400,300);
    background(255,255,255);
}

function draw() {
    background(255,255,255);
    charger.update(); //updates object on screen
    cord.update();
    phone.update();
}
