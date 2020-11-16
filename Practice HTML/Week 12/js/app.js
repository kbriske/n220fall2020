let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

function itsClicked(event) {
    console.log(event.target);
    event.target.innerHTML = "I've been clicked";
    event.target.style.backgroundColor = "#008877";
}
