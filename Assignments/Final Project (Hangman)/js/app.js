//REFERENCES
showWord = document.getElementById("DisplayWord");
//let letterChoice = document.getElementById("letters")
test = document.getElementById("dvTest");

//array for word choices
let words = ["cat", "inflated", "crash", "royal", "sum", "space", "science", "silicon", "egypt", "jewel"];

//randomly selects a word
let randomChoice = Math.floor((Math.random() * words.length)); //picks a random number between 1 and the length of the array
//console.log(randomChoice); //show the number generated

var totalCorrect = 0;
var totalIncorrect = 0;

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
        let choice = event.target.innerHTML; //choice is equal to the event.target.innerHTML (aka: a,b,c,etc)
        event.target.disabled = true; //disables the selection of a letter after it has been selected once
        console.log(event.target.innerHTML);
    }

    function filterText(event){ //when the mouse is clicked
        var splitString = curWord.split(''); //splits chosen word into an characters
        dvTest.innerHTML = (event.target.innerHTML + " as not in the word");
        totalIncorrect +=1;
        console.log("total: " + totalIncorrect + " out of " + splitString.length); //CHANGE TO BE OUT OF THE 6 ATTEMPTS FOR BOTH
        if(totalIncorrect == 6) {
            dvTest.innerHTML = "You lose!";
        }
        //dvTest.innerHTML = splitString; //displays said characters

        for(i = 0; i < splitString.length; i++) {
            if(event.target.innerHTML == splitString[i]) {  //if the innerHTML (letter) equals the splitString[i]
                dvTest.innerHTML = (event.target.innerHTML + " was in the word"); //display that letter as being in the word
                totalCorrect +=1; //add one to the total number of correct guesses
                console.log("total: " + totalCorrect + " out of " + splitString.length);

                if(totalCorrect == splitString.length) { //if the total is equal to the amount of letters in the word
                    dvTest.innerHTML = "You got the word!"; //display that the word has been guessed
                }
            }
        }
    }
}

function setup() {
    createCanvas(1300,500);
    background(26, 27, 65);
}

function draw(event) {
    background(26, 27, 65);

    if(totalIncorrect == 1) {
        fill(191, 215, 255);
        circle(650,150, 90);
    } else if(totalIncorrect == 2) {
        noStroke();
        fill(155, 177, 255);
        rect(640, 170, 20, 100);
        fill(191, 215, 255);
        circle(650,150, 90);
    }
}