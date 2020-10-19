//REFERENCES
let txtName = document.getElementById("txtName");
let dvName = document.getElementById("dvName"); //difference?
//let txtName = document.querySelector("#txtName");
//let dvName = document.querySelector("#dvName");

function hello(num, num2) {
    console.log(num, num2);
    //return (dvName.innerHTML = ("Hello " + num + "!"));
}
hello(3,4);

function submitName() {
    let name = String(txtName.value); //initializes name as a string from the value submitted in txtName (HTML)
    console.log("Hello, " + name);
    dvName.innerHTML = ("Hello " + name + "!");
    //return(dvName.innerHTML = ("Hello " + name + "!"));
}
//submitName(txtName.value);