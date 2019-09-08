var secretNumer = 7;
var userGuess = prompt("Guess the number: ");
userGuess = Number(userGuess);

if (userGuess === secretNumer) {
    alert("You guessed the right number!!")
}

else if (userGuess < secretNumer) {
    alert("Your guess is too low!!")
}

else {
    alert("Your guess is too high!!")
}