function setup(){
    createCanvas(800,600);
    var sky = "#C7FFFF"
    var posx = "200"
    background(sky);
    rect(posx,300,500,300);
    triangle()
    circle(posx,550,150);
    circle(posx,470,120);
    circle(200,400,80);
    arc(198,338,60,60,radians(90),QUARTER_PI, PI+QUARTER_PI);
    rect(157,350,85,30);
    triangle(200,410,200,400,250,405);
    strokeWeight(9);
    point(183,395);
    point(217,395);
}
