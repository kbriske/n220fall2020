//REFERENCES
var txtInput = document.getElementById("txtInput");
var dvBadWordCount = document.getElementById("dvBadWordCount");
var dvWordCount = document.getElementById("dvWordCount");

badWordTotal = 0;

function filterText() {
    //gets all of the input in an array
    var splitString = txtInput.value.split(" "); //splits the input by spaces and adds them to an array
    console.log(splitString);
    txtInput.value = ""; //clears the input box (HTML)

    //loop through to check for bad words
    for(i = 0; i < splitString.length; i++) {
        if(splitString[i] == "clear") {
            badWordTotal +=1;
        } else if(splitString[i] == "water") {
            badWordTotal +=1;
        } else if(splitString[i] == "tires") {
            badWordTotal +=1;
        }
        //displays totals in HTML
        dvBadWordCount.innerHTML = "Bad Words: " + badWordTotal;
        dvWordCount.innerHTML = "Words: " + splitString.length;
    }
    console.log("Bad Words: " + badWordTotal);
    console.log("Words: " + splitString.length);
    //resets the totals for the next entry
    badWordTotal = 0;
    splitString.length = 0;
}
