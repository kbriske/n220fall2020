//REFERENCES
let txtName = document.getElementById("txtName");
let dvName = document.getElementById("dvName"); //difference?
//let txtName = document.querySelector("#txtName");
//let dvName = document.querySelector("#dvName");

//METHOD 1
/*
function submitName() {
    let name = String(txtName.value); //initializes name as a string from the value submitted in txtName (HTML)
    console.log("Hello, " + name);
    dvName.innerHTML = ("Hello " + name + "!");
    //return(dvName.innerHTML = ("Hello " + name + "!"));
}
*/

//METHOD 2
function submitName() { //this function references the function below
    showName(txtName.value);
}

function showName(name) {
    console.log("Hello " + name);
    dvName.innerHTML = ("Hello " + name);
}

//submitName(txtName.value);