//REFERENCES
var txtSentence = document.getElementById("txtSentence");
var dvOutput = document.getElementById("dvOutput");
var allWords = [];

//Takes in words
function breakString() {
    var newWord = txtSentence.value;
    console.log(newWord);
    allWords.push(newWord); //shows all words
    dvOutput.innerHTML = "";

    //Display all words
    for(i = 0; i < allWords.length; i++) {
        var newEl = document.createElement("div");
        newEl.innerHTML = allWords[i];


    //If the word says "cloud" -> display in blue
    if(allWords[i] == "cloud") {
        newEl.style.color = "#4287f5";
    }
    dvOutput.appendChild(newEl);
    }
}
/*
var pizzas = [
    {name: "Pepperoni", price: 12},
    {name: "Cheese", price: 9},
    {name: "Mushroom", price: 11},
    {name: "The Works", price: 19},
    {name: "Supreme", price: 17},
]

for(i = 0; i < pizzas.length; i++) {
    var curPizza = pizzas[i];

    //make a new element for that pizza
    var newEl = document.createElement("div");
    
    //customize
    newEl.innerHTML = curPizza.name + ": $" + curPizza.price;
    newEl.backgroundColor = "#FFFF00";

    //add to the page
    document.body.appendChild(newEl);
}
*/

//SEARCHING AN ARRAY WITH INCLUDES
/*
var guessedFive = guesses.includes(5);
console.log(guessedFive);
*/

/*
//REFERENCES
var txtSentence = document.getElementById("txtSentence");
var txtOutput = document.getElementById("txtOutput");


function breakString() {
    var inputString = txtSentence.value; //gets the input from the input variable/tag
    var splitString = txtSentence.value.split(" ");

    txtOutput.innerHTML = splitString[0];
    console.log(splitString);
}
*/