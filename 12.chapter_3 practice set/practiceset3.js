let marks = {
    harry : 98,
    rohan : 70,
    aakash : 7,
    manish : 57
}


// chapter_3 and Question_1
/*
for(let i=0; i<Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
*/


// chapter_3 and Question_2
/*
for(key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}
*/


// chapter_3 and Question_3
/*
let cn = 22
let i
while( i != cn){
    console.log(i + " is not a currect number")
    console.log("Try again")
    i = prompt("Enter a number : ")
}
console.log("You have entered a currect number")
*/


// chapter_3 and Question_4
/*
const mean = (p,q,r,s,t) => {
    return (p+q+r+s+t)/5 ;
    // avg = (p+q+r+s+t) / 5 ;
    // console.log(avg)
}

let a = prompt("Enter first number")
a = Number.parseInt(a)
console.log(a)

let b = prompt("Enter second number")
b = Number.parseInt(b)
console.log(b)

let c = prompt("Enter third number")
c = Number.parseInt(c)
console.log(c)

let d = prompt("Enter fourth number")
d = Number.parseInt(d)
console.log(d)

let e = prompt("Enter fifth number")
e = Number.parseInt(e)
console.log(e)

console.log(mean(a,b,c,d,e))
*/