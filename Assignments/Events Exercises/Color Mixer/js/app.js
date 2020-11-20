//REFERENCES
canvas = document.getElementById("dvCanvas");
currentColor = document.getElementById("dvCurrentColor");
addRed = document.getElementById("dvRed");
addRed5 = document.getElementById("dvRed5");

currentColor.addEventListener("click", msClicked);
addRed = addEventListener("click", msClicked);

function msClicked(event) {
    console.log(event.target);
}

