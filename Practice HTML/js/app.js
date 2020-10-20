
let txtName = document.getElementById("txtDieSize"); //references the HTML document
//let txtDieSize = document.querySelector("#txtDieSize"); // do we need the #?
let dvResult = document.getElementById("dvResult");
//dvResult.innerHTML = "Hello World";

function rollDie() {
    let dieSize = Number(txtDieSize.value);
    let randRoll = 1 + Math.floor(Math.random() * dieSize);
    //let dieSize = txtDieSize.value;
    //console.log(randRoll);
    dvResult.innerHTML = ("Roll: " + randRoll);

    //txtDieSize = ""; //clears the box on refresh
}

function submit() {
    console.log("here is your number: " + txtName.value);
}
