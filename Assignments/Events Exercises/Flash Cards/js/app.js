//REFERENCES
answer = document.getElementById("dvAnswer");

function flipCard() {
    var answer = event.target.getAttribute("data-answer");
    dvAnswer.innerHTML = answer;
}

