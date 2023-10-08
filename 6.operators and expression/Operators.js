// Operators in javascripts

// Arithmetic operators in javascripts

let a = 10;
let b = 4;
console.log("a + b = ", a+b)  // addition
console.log("a - b = ", a-b)  // subtraction
console.log("a * b = ", a*b)  // multiplication
console.log("a / b = ", a/b)  // divisions
console.log("a % b = ", a%b)  // modulo
console.log("a ** b = ", a**b)  // exponential (ghat- ahiya a ni b jetli ghat thase aetlo javab aavase)
// increment operators
console.log("a++ = ", a++)  // post-increment (pela save thay and pacchi increment thay)
console.log("a-- = ", a--)  // post-decrement (pela save thay and pacchi decrement thay)
// decrement operators
console.log("++b = ", ++b)  // pre-increment  (pela increment thay and pacchi save thay)
console.log("--b = ", --b)  // pre-decrement  (pela decrement thay and pachhi save thay)


//  Assignment Operators

let c = 5;  // equals to (=) is assignment operator

c += 3; // same as c = c + 3
console.log("c is now = ", c)
c -= 4; // same as c = c - 4
console.log("c is now = ", c)
c *= 5; // same as c = c * 5
console.log("c is now = ", c)
c /= 5; // same as c = c / 5
console.log("c is now = ", c)
c %= 6; // same as c = c % 6
console.log("c is now = ", c)
c **= 4; // same as c = c ** 4
console.log("c is now = ", c)


// Comparison Operators

let com1 = 6;
let com2 = 7;
console.log("com1 == com2 is", com1 == com2)
console.log("com1 != com2 is", com1 != com2)
console.log("com1 < com2 is", com1 < com2)
console.log("com1 > com2 is", com1 > com2)
console.log("com1 <= com2 is", com1 <= com2)
console.log("com1 >= com2 is", com1 >= com2)

let com3 = 3;
let com4 = "3";
console.log("com3 == com4 is", com3 == com4)  // (==) ae khali value j chek kare chhe
console.log("com3 != com4 is", com3 != com4)  // (!=) ae khali value j chek kare chhe
console.log("com3 === com4 is", com3 === com4)  // (===) value pan check kare and data type pan chek kare chhe
console.log("com3 !== com4 is", com3 !== com4)  // (!==) value pan check kare and data types pan chek kare chhe



// Logical Operators

let x = 4;
let y = 5;
console.log(x<y && x==4)  // logical and (banne true hoy to j true thay)
console.log(x>y || x==4)  // logical or (banne false condition hoy to j false thay)
console.log(!true)  // logical not 
console.log(!false)


// Ternary Oprator - ? :

// aa topic pachha na video ma chhe
let age = prompt("whats your age?")
age = Number.parseInt(age)
console.log("you can", (age>18? "drive" : "not drive")) // jo condition true hase to first statement run thase jo false hase to second statement run thase


// This is single line comment

/* This is sample 
of multiline 
comment */