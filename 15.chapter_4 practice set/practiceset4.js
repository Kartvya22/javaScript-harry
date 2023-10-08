
// Chapter_4 & Question_1
let str = "Har\""
console.log(str.length) // it return 4 value because \" is escape sequence character and its length is 1 so total length is 4

// Chapter_4 & Question_2  // Includes() function in javascript
const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = 'fox'
console.log(sentence.includes(word))  // includes() function return true or false value
// jo string 2 ae string 1 ma hoy aetle k include hoy to true value aapse otherwise false
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)

// Chapter_4 & Question_3 // convert string in lower case
let name1 = "Kartvya Bharatbhai Darji"
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())

// Chapter_4 & Question_4 // extrect the amount in given string
let sentence2 = "Please give Rs 1000"
let amount = Number.parseInt(sentence2.slice(15,19))
console.log(amount)
console.log(typeof amount)
// console.log(sentence2.slice(15,19))


// Chapter_4 & Question_5 // change 4th character of string. it is possible ?
let friend = "alpesh" 
friend[3] = "i"
console.log(friend)  // string is immutable-not changable so here print string as it is- alpesh

