//REFERENCES
showWord = document.getElementById("DisplayWord");
test = document.getElementById("dvTest");
space = document.getElementById("space");
dvOut = document.getElementById("dvOut");

//array for word choices
let words = ["cat", "inflated", "crash", "royal", "sum", "space", "science", "silicon", "egypt", "jewel"];
let randomChoice = words[Math.floor(Math.random()*words.length)]; //randomly pulls a word from the array
console.log(randomChoice);

//variables
let totalCorrect = 0;
let totalIncorrect = 0;
let blanks = [];

var splitWord = randomChoice.split(''); //splits chosen word into characters
DisplayWord.innerHTML = randomChoice;
console.log(splitWord);

function reset() {
    location.reload();
}

for(i = 0; i < splitWord.length; i++) {
    var blank = document.createElement("div"); //creates buttons
    blank.classList.add("space");
    blank.style.left = 500 + i*50 + "px";
    space.appendChild(blank);
    blanks.push(blank);
}
console.log(blanks);

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
        let choice = event.target.innerHTML; //choice is equal to the event.target.innerHTML (aka: a,b,c,etc) DO I NEED THIS
        event.target.disabled = true; //disables the selection of a letter after it has been selected once
        //console.log(event.target.innerHTML);
    }

    function filterText(event){ //when the mouse is clicked
        //IF IT IS A MATCH
        let splitChoice = randomChoice.split('');
        //console.log("TESTING: " + splitChoice);
        
        let found = false;

        for(i = 0; i < randomChoice.length; i++) {
            if(event.target.innerHTML == splitChoice[i]) {
                dvTest.innerHTML = (event.target.innerHTML + " is in the word!");
                totalCorrect +=1;
                found = true;
                console.log(totalCorrect);
                if(totalCorrect >= randomChoice.length) {
                    dvTest.innerHTML = ("You got the word!");
                    alert("You win!");
                    location.reload();
                    break;
                }
            }
        }
        if(!found) {
            dvTest.innerHTML = (event.target.innerHTML + " is is not the word!");
            totalIncorrect +=1;
            console.log(totalIncorrect);
            if(totalIncorrect >= 6) {
                alert("You lose!");
                location.reload();
            }
        }
    }
}
//IT DOES NOT LIKE IT WHEN I SAY != 
        
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
        rect(640, 170, 20, 139);
        fill(191, 215, 255);
        circle(650,150, 90);
    } else if(totalIncorrect == 3) {
        noStroke();
        fill(155, 177, 255);
        rect(640, 170, 20, 139);
        fill(191, 215, 255);
        circle(650,150, 90);
        translate(width / 2, height / 2);
        rotate(PI / 3.0);
        fill(155, 177, 255);
        rect(-40, -11, 20, 100);
    } else if(totalIncorrect == 4) {
        noStroke();
        fill(155, 177, 255);
        rect(640, 170, 20, 139);
        fill(191, 215, 255);
        circle(650,150, 90);
        translate(width / 2, height / 2);
        rotate(PI / 3.0);
        fill(155, 177, 255);
        rect(-40, -11, 20, 100);
        //translate(width / 2, height / 2);
        rotate(PI / 3.0);
        fill(155, 177, 255);
        rect(110, -121, 20, 100);
    }
    
}
