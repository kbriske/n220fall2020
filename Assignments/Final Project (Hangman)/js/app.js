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

var splitWord = randomChoice.split(''); //splits chosen word into characters
DisplayWord.innerHTML = randomChoice;
console.log(splitWord);

/*
for(i = 0; i < splitWord.length; i ++) {
    var blank = document.createElement("div"); //creates buttons
    space.appendChild(blank);
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
        let choice = event.target.innerHTML; //choice is equal to the event.target.innerHTML (aka: a,b,c,etc) DO I NEED THIS
        event.target.disabled = true; //disables the selection of a letter after it has been selected once
        //console.log(event.target.innerHTML);
    }

    function filterText(event){ //when the mouse is clicked
        //IF IT IS A MATCH
        let splitChoice = randomChoice.split('');
        //console.log("TESTING: " + splitChoice);

        for(i = 0; i < randomChoice.length; i++) {
            if(event.target.innerHTML == splitChoice[i]) {
                dvTest.innerHTML = (event.target.innerHTML + " is in the word!");
                totalCorrect +=1;
                console.log(totalCorrect);
                if(totalCorrect >= randomChoice.length) {
                    dvTest.innerHTML = ("You got the word!");
                    alert("You win!");
                    //location.reload();
                }
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
        rect(640, 170, 20, 100);
        fill(191, 215, 255);
        circle(650,150, 90);
    }
}


/*
let objects = [
    {color: "#FF0000", height: 100, width: 300},
    {color: "#FFFF00", height: 200, width: 200},
    {color: "#FF0000", height: 300, width: 100},
];
*/
