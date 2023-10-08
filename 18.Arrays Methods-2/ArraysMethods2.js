// Arrays Methods

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let num3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

console.log(num1)
console.log("The length of num1 array is " + num1.length)
console.log(num2)
console.log("The length of num2 array is " + num2.length)
console.log(num3)
console.log("The length of num3 array is " + num3.length)

// delete in javascript is not method it is Operator
// delete is Operator not a method
delete num1[2]  // only remove 2nd index of element (and print empty instead of an element) but not affect on length of an arrays
console.log(num1) // updated num1 array
console.log("The length of num1 array is " + num1.length)

// .concate() method is use to join two or more given arrays
let newarray = num1.concat(num2, num3)  // here we join num2 array and num3 array to the num1 array
console.log(newarray) // return the concated newarray but does not change in existing array
console.log("The length of newarray array is " + newarray.length)

let num4 = [98, 7, 34, 56, 45, 1754, 5, 23, 12, 478, 67, 6]
console.log(num4)
console.log("The length of num4 array is " + num4.length)

num4.sort() // .sort() method sort the array alphabatically 
//  if array have 3,245,34 so sort method sort this elment to 245,3,34 
console.log(num4)
console.log("The length of num4 array is " + num4.length)

// for ascending(increasing) order
let compare1 = (a, b) => {  //compare1 is just name aapde koi pan name aapi sakiae pan function ma logic aa j rakhvu to j incresing order ma thase
    return a - b // for ascending(increasing) order
}
num4.sort(compare1) // by using compare1 function we sort the element by incresing order
console.log(num4)
console.log("The length of num4 array is " + num4.length)

// for descanding(decreasing) order
let compare2 = (a, b) => {  //compare2 is just name aapde koi pan name aapi sakiae pan function ma logic aa j rakhvu to j decrising order ma thase
    return b - a // for descanding(decreasing) order
}
num4.sort(compare2) // by using compare2 function we sort the element by decreasing order
console.log(num4)
console.log("The length of num4 array is " + num4.length)

// for reversing an array
console.log(num2)
console.log("The length of num2 array is " + num2.length)
num2.reverse() // it returns the reverse array of given array
console.log(num2)
console.log("The length of num2 array is " + num2.length)

// Splice method
num3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
console.log(num3)
console.log("The length of num3 array is " + num3.length)
// array.splice(index number where start adding new element, number of an element to remove , all the elements value to be added...)
let deletedValue = num3.splice(2, 4, 10234, 2087, 4657, 2834, 7645, 3645)
// here .splice( 1 is starting index of adding new element, 3 is number of element remove at the index 1 , and all others are new element to be add
console.log(deletedValue)  // it returns deleted elemets
console.log("The length of deletedValue is " + deletedValue.length)  // it returns deleted elemets length
console.log(num3) // return modified array
console.log("The length of num3 array is " + num3.length)

// Slice methid - slice out a piece from an array and it creates new array not modify existing array
let num5 = [45, 67, 54, 32, 14, 57, 26] 
console.log(num5)
// slice(x) it return array with elements from x index number to ending endex
let first = num5.slice(3) // it return array from 3 to end of an array
console.log(first)
// slice(x,y) it return array with elements from x index number to y-1 index number
let second = num5.slice(2,5)  // it returns array from 2 to 5-1 index number elements
console.log(second)





