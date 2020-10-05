let velocity = 7;

let dots = [
    /*
    {x: 100, y: 200, r: 40, c: "#04E762"},
    {x: 300, y: 50, r: 40, c: "#F5B700"},
    {x: 500, y: 200, r: 40, c: "#DC0073"},
    {x: 700, y: 50, r: 40, c: "#008BF8"},
    {x: 900, y: 200, r: 40, c: "#89FC00"}  
    */
    {x: 100, y: 275, r: 40, c: "#04E762"},
    {x: 300, y: 50, r: 40, c: "#F5B700"},
    {x: 500, y: 275, r: 40, c: "#DC0073"},
    {x: 700, y: 50, r: 40, c: "#008BF8"},
    {x: 900, y: 275, r: 40, c: "#89FC00"}  
];

function setup() {
    createCanvas(1000,500);
    background("#F2F4FF");
}

function draw() {
    background("#F2F4FF");
    for(i = 0; i < dots.length; i++) {
        fill(dots[i].c);
        circle(dots[i].x, dots[i].y, dots[i].r);
        dots[i].y += 10;
        if(dots[i].y >= 480) {
            dots[i].y = 20;
        }
        /*
        dots[i].y = dots[i].y + velocity;
        

        if((dots[i].y >= 480) || (dots[i].y <= 20)) {
            velocity = velocity * -1;
            console.log("i position: " + dots[0].x);
        }
        */
    }
}

