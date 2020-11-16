//REFERENCES
let tile = document.getElementById("dvTile1");

//array for colors
colors = ["#ff4542", "#5df067", "#3680f7"]

for(i = 0; i < 3; i++) {
    let newTile = document.createElement("div");
    newTile.style.width = "200px";
    newTile.style.height = "200px";
    newTile.style.cssFloat = "left";
    newTile.style.margin = "5px";
    newTile.style.top = 25 + "px";
    newTile.style.left = 25 + "px";
    newTile.style.borderRadius = "9px";
    newTile.style.backgroundColor = "#222";

    tile.appendChild(newTile);

    newTile.addEventListener("click", msClicked);
    newTile.setAttribute("data-color",colors[i]);
}

tile.addEventListener("click", msClicked);

function msClicked(event) {
    let color = event.target.getAttribute("data-color");
    //console.log(event.target);
    event.target.style.backgroundColor = color;
}