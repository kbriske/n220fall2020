//REFERENCES
let txtName = document.getElementById("txtName");
let dvName = document.getElementById("dvName");

function submitName() {
    let name = String(txtName.value); //initializes name as a string from the value submitted in txtName (HTML)
    console.log("Hello " + name); //logs Hello, name to console
    dvName.innerHTML = ("Hello " + name + "!");
}
