//REFERENCES
space = document.getElementById("space");
function createElement() {
  for(i = 0; i < 5; i ++) {
    var blank = document.createElement("div"); //creates buttons
    space.appendChild(blank);
}
}

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