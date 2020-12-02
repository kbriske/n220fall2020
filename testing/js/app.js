//REFERENCES


let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(i = 0; i < letters.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = letters[i];
    button.className = "btn btn-outline-success";
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);
  }
