//REFERENCES
showWord = document.getElementById("DisplayWord");

let words = ["cat", "dog", "wolf"];

for(i = 0; i < words.length; i++) {
    console.log(words[i]);
}

let randomChoice = Math.round(Math.random() * words.length);
console.log(randomChoice);

if(randomChoice == 0) {
    curWord = words[0];
    showWord.innerHTML = words[0];
} else if(randomChoice == 1) {
    curWord = words[1];
    showWord.innerHTML = words[1];
} else if(randomChoice == 2) {
    curWord = words[2];
    showWord.innerHTML = words[2];
}