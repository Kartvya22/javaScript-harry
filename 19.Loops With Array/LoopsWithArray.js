// Loops in Array in javaScript

let num1 = [9,3,7,2,6,4]
// arrays are object. above is object like [0:9, 1:3, 2:7 ,...]
// [0:9, 1:3, 2:7 ,...] here 0,1,2... are keys(index number) and 9,3,7.. are values

// for Loop
for(let i=0; i<num1.length; i++)
{
    console.log(num1[i]) // return value of array (ith index number elements)
    // console.log(num1[i] * num1[i]) // square of elements
}
console.log(" ")

// forEace Loop - it not creat new araay it perform operation on existing array
// .forEach(value,index,array) is fix aarguments
num1.forEach((a,b,c) => {  // here a is value of array , b is index of an array , c is array
    console.log(a) 
    console.log(b)
    console.log(c)
    console.log(" ")
})

// Array.from - it converts from string or html collectin to array . use in html collection
let name1 = "Kishu"
console.log(name1)
console.log("Type of name1 is " + typeof name1)
let arr = Array.from(name1)  // convert string collectin to array collection
console.log(arr)
console.log("Type of arr is " + typeof arr)
console.log(" ")

// for...in
for (let i in num1) {
    console.log(i) // return keys(index number) of an array
    console.log(num1[i]) // return value(item) of an array
}
console.log(" ")

// for...of
for(let item of num1) {
    console.log(item)  // return value(item) of an array
}