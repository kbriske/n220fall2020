let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "tails";
dvCoin.style.backgroundColor = "#ebcf34";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin() { //does a coin flip
    let flip = Math.random();
    let side = "heads";
    if(flip > .5) side = "tails"
    //set results in innerHTML
    dvCoin.innerHTML = side;

    //change background color based on result
    if(side == "tails") {
        dvCoin.style.backgroundColor = "#eb5634";
    } else {
        dvCoin.style.backgroundColor = "#ebcf34";
    }
    //record results
let newEl = document.createElement("div");

//customize the element
newEl.innerHTML = side;
newEl.style.backgroundColor = "#999";
newEl.style.width = "40px";
newEl.style.float = "left";
newEl.style.margin = "3px";

//place the object on the page
document.body.appendChild(newEl);

}

