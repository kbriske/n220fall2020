//REFERENCES
var txtInput = document.getElementById("txtInput");
var dvBadWordCount = document.getElementById("dvBadWordCount");
var dvWordCount = document.getElementById("dvWordCount");
var output = document.getElementById("output");

var allWords = [];
badWordTotal = 0;

function filterText() {
    var splitString = txtInput.value.split(" "); //splits the input by spaces
    
    allWords.push(splitString); //adds the input to an array
    console.log(allWords);

    output.innerHTML = ""; //sets the output back to nothing
   

    for(i = 0; i < allWords.length; i++) { //loops through all the words in the input

        var newEl = document.createElement("div"); //creates a new div
        newEl.innerHTML = allWords[i]; //displays the array of words in the new div
        
        if(allWords[i] == "clear") {
            badWordTotal += 1;
        } else if (allWords[i] == "water") {
            badWordTotal +=1;
        } else if (allWords[i] == "tires") {
            badWordTotal += 1;
        }
        output.appendChild(newEl);
        dvBadWordCount.innerHTML = "bad words: " + badWordTotal;
        console.log("bad words: " + badWordTotal);
        //allWords[i] = "";
        badWordTotal = 0;
    }
}