//REFERENCES
let dvTile = document.getElementById("tile");

colors = ["#925E78", "#BD93BD", "#F2EDEB", "#F05365", "#FABC2A", "#4effef", "#73A6AD", "#9B97B2", "#D8A7CA", "#C7B8EA"];

for(i = 0; i < 100; i++) {
    let tile = document.createElement("div");

    tile.style.width = "20px";
    tile.style.height = "20px";
    tile.style.backgroundColor = colors[i];
    tile.style.margin = "17px";
    tile.style.cssFloat="left" //YES, I FOUND IT

    document.body.appendChild(tile);
}