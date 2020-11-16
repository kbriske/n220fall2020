let gameBody = document.getElementById("gameBody");

//make 4 enemies
for(i = 0; i < 4; i++) {
    let newEn = document.createElement("div");
    newEn.style.width = "30px";
    newEn.style.height = "30px";
    newEn.style.position = "absolute";
    newEn.style.top = (Math.random() * 150) + "px";
    newEn.style.left = (Math.random() * 400) + "px";
    newEn.style.borderRadius = "10px";
    newEn.style.backgroundColor = "#222"

    gameBody.appendChild(newEn);

    newEn.addEventListener("click", removeEnemy);
}

function removeEnemy(event) {
    //event.target.style.backgroundColor = "#003566"; //changes color
    event.target.remove();
}



/*
let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

function itsClicked(event) {
    console.log(event.target);
    event.target.style.backgroundColor = "#008877";

//get the attribute
let response = event.target.getAttribute("data-response"); //if you are storing numbers in the attribute, tpyecast Number(element.get---)
console.log(response);
event.target.innerHTML = response;
}
*/