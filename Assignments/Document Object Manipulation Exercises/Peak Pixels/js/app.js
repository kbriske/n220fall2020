//WHEN WOULD I WANT TO USE THIS VERSUS WHAT IS BELOW
/*let square = document.createElement("div");

square.style.width = "100px";
square.style.height = "100px";
square.style.backgroundColor = "#00FF00";

document.body.appendChild(square);

console.log(square);
function scaleUp() {
    square.innerHTML = "hello";
    square.style.width = "200px";
}*/

//REFERENCES
let dvSquare = document.getElementById("square");
console.log(dvSquare);

//properties
widthpx = 100 + "px";
heightpx = 100 + "px";
dvSquare.style.width = widthpx;
dvSquare.style.height = heightpx;
dvSquare.style.backgroundColor = "#00FF00";
//how can I set absolute position in js

function scaleUp() {
    dvSquare.innerHTML = "hello";
    
}