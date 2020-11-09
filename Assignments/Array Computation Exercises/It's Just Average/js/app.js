//REFERENCES
var txtData = document.getElementById("txtData");
var dataOutput = document.getElementById("dataOutput");

/*
var tString = "welcome to animal crossing new horizons"
var splitString = tString.split(" ");
console.log(tString);
console.log(splitString);
*/

sum = 0;

function computeData() {
    //var inputString = txtData.value; do I need this?
    var splitString = txtData.value.split(","); //splits the string by commas into the individual numbers
    //dataOutput.innerHTML = splitString[0]; //displays the first number in the new array 
    console.log(splitString); //logs the array to the console
    txtData.value = ""; //clears the input box

    for(i = 0; i < splitString.length; i++) {
        var curData = splitString[i];
        sum = sum + curData;
        console.log("sum" + sum);
    }
    
}
