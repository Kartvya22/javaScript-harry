// video-08, chapter-02, practice set

// chapter_02 Question_1
/*
let age = prompt("What is your age?")
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20")
}
else {
    console.log("Your age doesn't lies between 10 and 20")
}
*/

// chapter_02 Question_2
/*
let age = prompt("What is your age?")
age = Number.parseInt(age)  // jo string mathi number ma convert na kariae to case ni baju ma value string ma aetle k quatation("") ma lakhvu pade
switch (age) {
    case 12:
        console.log("your age is 12")
        break;
    case 18:
        console.log("your age is 18")
        break;
    case 25:
        console.log("your age is 25")
        break;
    case 60:
        console.log("your age is 60")
        break;
    default:
        console.log("you are mahapurush")
}
*/

// chapter_02 Question_3
/*
let num = prompt("enter any number")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3.")
}
else {
    console.log("Your number is not divisible by 2 and 3.")
}
*/


// chapter_02 Question_4
/*
let number = prompt("enter any number")
number = Number.parseInt(number)
if(number%2==0 || number%3==0){
    console.log("Your number is divisible by either 2 or 3.")
}
else {
    console.log("Your number is not divisible by 2 or 3.")
}
*/


// chapter_02 Question_5
let age = prompt("what is your age?")
console.log("You Can", age >= 18 ? "Drive" : "Not Drive")