// Array - array is collection of items. items is accessed with index
// Arrays are mutable so it can be changed

let marks = [93, 87, false, 45, "Not Present", 23, null, 67]  //simple syntax of array  // array value store in square brackets - []
// in javascript arrays also store different type of items . like here 45 , "Not Present", false

console.log(marks)  // here we print array

console.log("The type of arrays is " + typeof marks)  // arrays is one types of an object

console.log("The length of marks is " + marks.length)  // for fetching length of array we use .length property


// by index number we print particular arrays items
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7])
console.log(marks[12])  // will be undefined because index 12 is does not exist

marks[8] = 78 // Adding a new value to the array
console.log(marks)
console.log("The length of marks is " + marks.length)  // for fetching length of array we use .length property

// Arrays are mutable so it can be changed
marks[0] = 98  // changing the value of an array
console.log(marks)
console.log("The length of marks is " + marks.length)  // for fetching length of array we use .length property

// problem - print all items value using for loop

let a = ["kishu", 91, `kishor`, true, "kishan",  'kartvya']
for (let i=0; i<a.length; i++) {
    console.log(a[i])
}