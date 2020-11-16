//REFERENCES
let tile = document.getElementById("dvTile1");
tile.addEventListener("click", msClicked);
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