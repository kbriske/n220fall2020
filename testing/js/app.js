//REFERENCES
space = document.getElementById("space");
test = document.getElementById("test");

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for(i = 0; i < letters.length; i++) {
    var blank = document.createElement("button"); //creates buttons
    blank.innerHTML = letters[i];
    blank.classList.add("space")
    space.appendChild(blank);
}
addEventListener("click",msClicked);

function msClicked(event) {
  test.innerHTML = ("hello");
}
//elementRef.classList.add("space");



/*
var v = 1; 

var f1 = function () { 
  console.log(v); 
} 

var f2 = function() { 
  var v = 2; 
  f1(); 
}; 

f2();
let modal = document.querySelector('#results');
setTimeout(function() {
 modal.classList.remove('hidden');
}, 10000);
console.log('Results shown');

const dessert = { type: 'pie' }; 
dessert.type = 'pudding';
console.log(dessert.type);
*/