let colors = ["#ff3730", "#ff9a17", "#effa19", "#28eb45", "#43b1bf", "#3926eb", "#fa19f6"] ;

function setup() {
    createCanvas(500,500);
    background(237, 237, 237);

    for(var i = 0; i < colors.length; i++) {
        fill(colors[i]);
        rect(50*i+100,50*i+110,70,70,20);
        rect(50*i+100,50*-i+310,70,70,20);
        console.log(colors[i]);  
    }
}