function setup(){
    createCanvas(800,600);
    var sky = "#C7FFFF"
    var posx = "200"
    let black = "#000000"
    background(sky);
    fill(224, 56, 4);
    rect(posx,300,500,300);
    fill(255,255,255);
    circle(posx,550,150);
    circle(posx,470,120);
    circle(200,400,80);
    fill(0,0,0);
    arc(198,338,60,60,radians(90),QUARTER_PI, PI+QUARTER_PI); //hat top
    rect(157,350,85,30); //hat base
    fill(110, 43, 1);
    rect(500,460,100,300); //door
    fill(186, 184, 182);
    circle(515,540,10); //doorknob
    noFill();
    rect(318,375,100,100); //window
    fill(sky);
    rect(324,380,40,40); //pane1(topleft)
    rect(370,380,40,40); //pane2(topright)
    rect(324,430,40,40); //pane3(bottomleft)
    rect(370,430,40,40); //pane4(bottomright)
    fill(252, 157, 3);
    triangle(200,410,200,400,250,405); //nose
    strokeWeight(9);
    point(183,395);
    point(217,395);
    strokeWeight(1);


}
