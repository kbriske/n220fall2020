//REFERENCES
showWord = document.getElementById("DisplayWord");
test = document.getElementById("dvTest");
space = document.getElementById("space");

//array for word choices
let words = ["cat", "inflated", "crash", "royal", "sum", "space", "science", "silicon", "egypt", "jewel","syzygy"];
let randomChoice = words[Math.floor(Math.random()*words.length)]; //randomly pulls a word from the array
console.log(randomChoice);

//variables
let totalCorrect = 0;
let totalIncorrect = 0;
let blanks = [];

var splitWord = randomChoice.split(''); //splits chosen word into characters
//DisplayWord.innerHTML = randomChoice;
DisplayWord.innerHTML = "Hangman";
console.log(splitWord);

//reset the page
function reset() {
    location.reload();
}

for(i = 0; i < splitWord.length; i++) {
    var blank = document.createElement("div"); //creates buttons
    blank.classList.add("space");
    blank.style.left = 700 + i*50 + "px";
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
                dvTest.innerHTML = (event.target.innerHTML + " is in the word");
                totalCorrect +=1;
                found = true;
                //console.log(totalCorrect);
                blanks[i].innerHTML = event.target.innerHTML; //yess, I got it
                if(totalCorrect >= randomChoice.length) {
                    dvTest.innerHTML = ("You win!");
                    break;
                }
            }
        }
        //IF IT IS NOT A MATCH
        if(!found) {
            dvTest.innerHTML = (event.target.innerHTML + " is is not the word");
            totalIncorrect +=1;
            //console.log(totalIncorrect);
            if(totalIncorrect == 6) {
                dvTest.innerHTML = ("You lose, click reset to try again!");

            }
            else if(totalIncorrect >= 6) {
                location.reload();
            }
        }
    }
}

//P5 
function setup() {
    createCanvas(1375,500);
    background(11, 57, 72);
    //rectMode(CENTER);
}

function draw(event) {
    background(11, 57, 72);
    noStroke();
    fill(255,255,255);
    rect(150,50,150,20); //top rectangle of the gallow
    rect(175,70,20,380); //column of the gallow
    rect(120,450,200,20); //base of the gallow

    if(totalIncorrect == 1) {
        fill(191, 215, 255);
        circle(300, 120, 90); //head
    } else if(totalIncorrect == 2) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
    } else if(totalIncorrect == 3) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230,200,60,20); //left arm
    } else if(totalIncorrect == 4) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230,200,60,20); //left arm
        fill(155,177,255);
        rect(310,199,60,20); //right arm
    } else if(totalIncorrect == 5) {
        noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230,200,60,20); //left arm
        fill(155,177,255);
        rect(310,199,60,20); //right arm
        rotate(PI / 3.0);
        fill(155, 177, 255);
        rect(400, -117, 20, 90); //left leg
    } else if(totalIncorrect == 6) {
               noStroke();
        fill(191, 215, 255);
        circle(300, 120, 90); //head
        fill(155, 177, 255);
        rect(290, 163, 20, 139); //spine
        fill(155, 177, 255);
        rect(230,200,60,20); //left arm
        fill(155,177,255);
        rect(310,199,60,20); //right arm
        rotate(PI / 3.0);
        fill(155, 177, 255);
        rect(400, -117, 20, 90); //left leg
        fill(155, 177, 255);
        rect(405,-123,90,20); //right leg
    
    }
}
/*
translate(width / 2, height / 2);
rotate(PI / 3.0); //must have to rotate
fill(155, 177, 255);
rect(-280, 290, 20, 100); //left arm
//translate(width / 2, height / 2);
rotate(PI / 3.0);
fill(155, 177, 255);
rect(40, 11, 20, 100);
*/