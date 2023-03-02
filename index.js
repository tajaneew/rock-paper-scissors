// ROCK PAPER SCISSORS
let choices = [
    'rock',
    'paper',
    'scissors'
]; // create a variable named choices, and assign an array with three elements to it

let userChoice = prompt('Choose between rock - paper -scissors '); // create a variable userChoice, and we assign the value prompt by the user
let computerChoice = choices[
   Math.floor(Math.random() * 3)
]; // 
// round 

alert('Computer select ' + computerChoice);
if (userChoice == 'scissors') {
    if (computerChoice == 'paper') {
        alert('You win');
    } else if (computerChoice == 'scissors') {
        alert('It\' a draw')
    } else if (computerChoice == 'rock') {
        alert('You lose')
    }
} else if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
        alert('You lose');
    } else if (computerChoice == 'scissors') {
        alert('You win')
    } else if (computerChoice == 'rock') {
        alert('It\' a draw')
    }
} else if (userChoice == 'paper') {
    if (computerChoice == 'paper') {
        alert('It\' a draw')
    } else if (computerChoice == 'scissors') {
        alert('You Lose')
    } else if (computerChoice == 'rock') {
        alert('You win')
    }
}