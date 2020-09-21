let colors = ["#4287f5", "#fcba03", "#000596"];
let colors2 = ["#fdd6ff", "#4a2e2a", "#fcfce1"];

function setup() {
    createCanvas(700,700);
    background(245, 245, 245);

for(var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(50*i+250,200,50,100);
    console.log(colors[i]);
    }

//this is more realistic :)
for(var a = 0; a < colors2.length; a++) {
    fill(colors2[a]);
    rect(50*a+250,400,50,100);
    console.log(colors[a]);
    }
}




