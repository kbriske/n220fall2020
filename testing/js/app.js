//REFERENCES
space = document.getElementById("space");
function createElement() {
  for(i = 0; i < 5; i ++) {
    var blank = document.createElement("div"); //creates buttons
    space.appendChild(blank);
}
}
