//REFERENCES
var txtData = document.getElementById("txtData");
var dataOutput = document.getElementById("dataOutput");
var dvAvg = document.getElementById("dvAvg");
var dvSum = document.getElementById("dvSum");

//variables
var avg = 0;
var sum = 0;

function computeData() {
    //var inputString = txtData.value; do I need this?
    var splitString = txtData.value.split(","); //splits the string by commas into the individual numbers
    console.log(splitString);
    txtData.value = ""; //clears the input box (HTML)

    for(i = 0; i < splitString.length; i++) {
        let numData = Number(splitString[i]); //I mean, this makes them into numbers
        sum = sum + numData; //math for sum
        avg = sum / splitString.length; //math for average
        dvAvg.innerHTML = "Average: " + avg;
        dvSum.innerHTML = "Sum: " + sum;
    }
    console.log("average: " + avg);
    console.log("sum: " + sum);
    sum = 0; //sets sum back to 0
    avg = 0; //sets average back to 0
}