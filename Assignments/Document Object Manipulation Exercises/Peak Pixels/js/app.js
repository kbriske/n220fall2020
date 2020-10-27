//REFERENCES
let dvSquare = document.getElementById("square");
console.log(dvSquare);

//properties
width = 100;
height = 100;
dvSquare.style.width = width + "px";
dvSquare.style.height = height + "px";
dvSquare.style.backgroundColor = "#00FF00";

function scaleUp() {
    width *= 1.1;
    height *= 1.1;
    dvSquare.style.width = width + "px";
    dvSquare.style.height = height + "px";
    console.log(width, height);
}

window.onclick = scaleDown;
function scaleDown() {
    width
}