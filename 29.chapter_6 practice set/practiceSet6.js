
// Chapter_6 & Question_1
/*
let age = prompt("Enter Your Age ")
age = Number.parseInt(age)
if (age > 18) {
    alert("Yes you can Drive!")
}
else {
    alert("You can not drive")
}
*/

// Chapter_6 & Question_2
/*
let newage = true
while (newage) {

    age = prompt("Enter Your Age ")
    age = Number.parseInt(age)

    // Chapter_6 & Question_3
    if (age < 0) {
        console.error("Please enter a valid age")
        break
    }

    if (age > 18) {
        alert("Yes you can Drive!")
    }
    else {
        alert("You can not drive")
    }
    newage = confirm("You want see prompt again?")
}
*/



// Chapter_6 & Question_4
/*
let num = prompt("Enter number: ")
num = Number.parseInt(num)
if (num > 4) {
    location.href = "https://www.google.com/"
}
*/

// Chapter_6 & Question_5
/*
let color = prompt("Enter the backgroung color name")
document.body.style.background = color
*/