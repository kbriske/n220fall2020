//REFERENCES
let guess = document.getElementById("guess");
let dvRandom = document.getElementById("dvRandom");
let dvAttempt = document.getElementById("dvAttempt");

//generate a random number between 0 and 20
let randomNum = Math.floor(Math.random() * Math.floor(21)); //why does this not generate any 20's when 20 is the floor
console.log(randomNum);   

function submitGuess() {
    let guess = (txtGuess.value);

    if(guess < randomNum) {
        return(dvRandom.innerHTML = "Your guess is too low");
    } else if (guess == randomNum) {
        randomNum = Math.floor(Math.random() * Math.floor(20));
        console.log(randomNum);
        dvAttempt.innerHTML = "Try guessing the new number";
        return(dvRandom.innerHTML = "Congratulations, you guessed the random number!");
    } else if (guess > randomNum) {
        return(dvRandom.innerHTML = "Your guess is too high");
    }
}

//YOU CAN DELETE THE RETURN STATEMENTS AND JUST UPDATE THE DIV TAGS