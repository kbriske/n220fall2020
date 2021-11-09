//REFERENCES
let billAmt = document.getElementById("billAmt");
let dvTip = document.getElementById("dvTip");
let dvTotal = document.getElementById("dvTotal");

function calc() {
    let amount = Number(billAmt.value); //sets value of billAmt to
    let tip = (amount/100) * 20; //math for tip
    let total = (amount + tip); //math for total
    console.log("tip: " + tip);
    console.log("total: " + total);
    dvTip.innerHTML = ("Tip: $" + tip); //displays tip to page
    dvTotal.innerHTML = ("Total: $" + total); //displays total to page
    
}
