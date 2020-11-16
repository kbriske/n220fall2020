//REFERENCES
let tile = document.getElementById("dvTile1");
let tile2 = document.getElementById("dvTile2");
let tile3 = document.getElementById("dvTile3");

/*
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
}
*/

tile.addEventListener("click", msClicked);
tile2.addEventListener("click", msClicked);
tile3.addEventListener("click", msClicked);

tile.style.width = "200px";
tile.style.height = "200px";
tile.style.backgroundColor = "#222";
tile.style.cssFloat = "left";
tile.style.margin = "5px";

tile2.style.width = "200px";
tile2.style.height = "200px";
tile2.style.backgroundColor = "#222";
tile2.style.cssFloat = "left";
tile2.style.margin = "5px";

tile3.style.width = "200px";
tile3.style.height = "200px";
tile3.style.backgroundColor = "#222";
tile3.style.cssFloat = "left";
tile3.style.margin = "5px";

function msClicked(event) {

    let code = Number(event.target.getAttribute("data-code"));
    //console.log(event.target);
    event.target.innerHTML = code;

    if(code == 1) {
        event.target.style.backgroundColor = "#ff4542";
    }
    else if(code == 2) {
        event.target.style.backgroundColor = "#5df067";
    }
    else if(code == 3) {
        event.target.style.backgroundColor = "#3680f7";
    }
}

