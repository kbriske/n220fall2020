//REFERENCES
showWord = document.getElementById("DisplayWord");
let letterChoice = document.getElementById("letters")
test = document.getElementById("dvTest");

//array for word choices
let words = ["cat", "inflated", "crash", "royal", "sum", "space", "science", "silicon", "egypt", "jewel"];

//randomly selects a word
let randomChoice = Math.floor((Math.random() * words.length)); //picks a random number between 1 and the length of the array
//console.log(randomChoice); //show the number generated

if(randomChoice == 0) {
    curWord = words[0];
    showWord.innerHTML = "Word: " + words[0];
} else if(randomChoice == 1) {
    curWord = words[1];
    showWord.innerHTML = "Word: " + words[1];
} else if(randomChoice == 2) {
    curWord = words[2];
    showWord.innerHTML = "Word: " + words[2];
} else if(randomChoice == 3) {
    curWord = words[3];
    showWord.innerHTML = "Word: " + words[3];
} else if(randomChoice == 4) {
    curWord = words[4];
    showWord.innerHTML = "Word: " + words[4];
} else if(randomChoice == 5) {
    curWord = words[5];
    showWord.innerHTML = "Word: " + words[5];
} else if(randomChoice == 6) {
    curWord = words[6];
    showWord.innerHTML = "Word: " + words[6];
} else if(randomChoice == 7) {
    curWord = words[7];
    showWord.innerHTML = "Word: " + words[7];
} else if(randomChoice == 8) {
    curWord = words[8];
    showWord.innerHTML = "Word: " + words[8];
} else if(randomChoice == 9) {
    curWord = words[9];
    showWord.innerHTML = "Word: " + words[9];
}

/*
//splits the string into characters
var chars = curWord.split('');
console.log(chars);


for(i = 0; i < chars; i++) {
    var blankSpace = document.createElement("div"); //creates divs
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(space);
}
*/



//array for letters
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//generates letters on the page
for(i = 0; i < letters.length; i++) {
    var button = document.createElement("button"); //creates buttons
    button.innerHTML = letters[i]; //assigns a letter to each button from the array
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);

    button.addEventListener("click", msClicked); //listens for an event 
    button.addEventListener("click", filterText); //listens for event with a different function to invoke
    
    function msClicked(event) { //when the mouse is clicked
        let choice = event.target.innerHTML; //choice is equal to the target.innerHTML (aka: a,b,c,etc)
        event.target.disabled = true; //disables the selection of a letter after it has been selected once
    }
    function filterText(event){
        var splitString = curWord.split('');
        dvTest.innerHTML = splitString;

        for(i = 0; i < splitString.length; i++) {
            if(splitString[i] == curWord) {
                console.log("YAY");
            }
        }
    }
}

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
dvTest.innerHTML = pos;


