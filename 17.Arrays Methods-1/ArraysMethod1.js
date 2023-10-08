// Arrays Methods

let num1 = [1, 2, 3, 45, 7]
console.log(num1)
console.log("The length of a given array is " + num1.length)
console.log("Type of an array is " + typeof num1)

let b = num1.toString() // .toString convert array into string 
console.log(b)
console.log(typeof b)  // here typeof b is string

let c = num1.join("-") // .join is join the arrays items by declared seprater . here we use "-" as a seprator. jo kai na lakhiae to by default alpviram aave
console.log(c)
console.log(typeof c)

let d = num1.join(" and ") // here we join items by and 
console.log(d)
console.log(typeof d)

let r = num1.pop() //.pop() remove last element from the array  // .pop() method update the original array and returns the popped value
console.log(r)  // it returns poped element
console.log(num1) // updated array
console.log("The length of a given array is " + num1.length) // updated length

let s = num1.push(34,67,"kishu") // .push() add the elements at the end of array // push method na bracket ma je elements add karvana hoy te lakhva
console.log(s) // it return length of an array
console.log(num1) // updated array
console.log("The length of a given array is " + num1.length) // updated length

let t = num1.shift() //.shift() remove first element from the array  // .shift() method update the original array and returns the popped value
console.log(t)  // it returns poped element
console.log(num1) // updated array
console.log("The length of a given array is " + num1.length) // updated length

let u = num1.unshift(87,56) // .unshift() add the elements at the stating of an array // unshift method na bracket ma je elements add karvana hoy te lakhva
console.log(u) // it return length of an array
console.log(num1) // updated array
console.log("The length of a given array is " + num1.length) // updated length