//REFERENCES
let password = document.getElementById("password");
let passwordCheck = document.getElementById("passwordCheck");
let dvMessage = document.getElementById("dvMessage");

function confirm() {
    let p1 = String(password.value);
    let p2 = String(passwordCheck.value);
    if(p1 == p2) {
        dvMessage.innerHTML= "Success";
    }
    else {
        dvMessage.innerHTML = "Wrong Information";
    }
}