//REFERENCES
let tile = document.getElementById("dvTile1");
let tile2 = document.getElementById("dvTile2");
let tile3 = document.getElementById("dvTile3");

colors = ["#ff4542","#5df067","#3680f7"]

tile.addEventListener("click", msClicked);
tile2.addEventListener("click", msClicked);
tile3.addEventListener("click", msClicked);

function msClicked(event) {
    let color = event.target.getAttribute("data-color");
    //console.log(event.target);
    event.target.style.backgroundColor = color;
}

