//REFERENCES
showWord = document.getElementById("DisplayWord");
let letterChoice = document.getElementById("letters")

//Array for word choices
let words = ["cat", "dog", "wolf"];
/*
//show all words in console
for(i = 0; i < words.length; i++) {
    console.log(words[i]);
}
*/

//randomly selects a word
let randomChoice = Math.floor((Math.random() * words.length)); //picks a random number between 1 and the length of the array
console.log(randomChoice); //show the number generated

if(randomChoice == 0) {
    curWord = words[0];
    showWord.innerHTML = "word: " + words[0];
} else if(randomChoice == 1) {
    curWord = words[1];
    showWord.innerHTML = "word: " + words[1];
} else if(randomChoice == 2) {
    curWord = words[2];
    showWord.innerHTML = "word: " + words[2];
}

//array for letters
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//generates letters on the page
for(i = 0; i < letters.length; i++) {
    var button = document.createElement("button"); //creates buttons
    button.innerHTML = letters[i]; //assigns a letter to each button from the array
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);

    button.addEventListener("click", msClicked); //listens for an event 

    function msClicked(event) {
        let choice = event.target.innerHTML;
        if(choice == "A") {
            console.log("YAY IT WORKS!")
            event.target.disabled = true;
        }
    }
}

for(i = 0; i < curWord.length; i++) {
    console.log(curWord[i]);
}

