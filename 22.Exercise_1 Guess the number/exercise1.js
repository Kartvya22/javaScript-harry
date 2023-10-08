// Game - Guess the currect number

let number1 = Math.random() * 100
number1 = Number.parseInt(number1)
// console.log(number1)

let chanses = 0

let number2

do {

    number2 = prompt("Enter number between 0 to 100 :")

    if (number1 == number2) {
        console.log("\"Congratulation!\" Your guesses is right")
        console.log("The Number = \"" + number2 + "\"")
    }
    else if (number1 > number2) {
        console.log("your guesses is less than the actual number")
    }
    else {
        console.log("your guesses is greater than the actual number")
    }

    chanses++

}while (number1 != number2)

let score = 101 - chanses
console.log("Your Score = \"" + score + "\"")