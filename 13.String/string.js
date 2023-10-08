// String in javaScript

// string is collection of character

// Double("") quotes string
let name = "kartvya"  // here kartvya is string and here we use double quotes string
console.log(name)
console.log(name.length)  // name.length return length of name(kartvya)
console.log(name[0])  // by index number we fetch our string element
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])

// Single('') quotes string
let surname = 'darji' // here darji is string and here we use single quotes string
console.log(surname)
console.log(surname.length)  // it return surname length

// Template literals string - it is use Backtick(``) for string
let dist = `banaskanth`
console.log(dist)


// let friend = "kishu'  // string ne je quotes vade start kariae ae j quotes vade bandh karay
//  don't do this 
// console.log(friend)

// Template literals
let boy1 = "Alpesh"
let boy2 = "Mitesh"
let sentence1 = `first boy "Alpesh" is clever` // template literals vade aapde vache pan quotes no use kari sakiae chhiae
console.log(sentence1)

// String intepolation
let sentence2 = `${boy2} is a friend of ${boy1}` // String interpolation - we can insert variable directly in template literal by using ${vaiable_name}
console.log(sentence2)


// Escape Sequence Characters 
// escape sequence ae hamesa backward-slash(\) vade start thay chhe and length count karta time ae aene count na karay
// escape sequence character ni length hamesa 1 j hoy chhe
// Example = \', \", \n, \r, \t aa badhaani length 1 j ganvama aave chhe 

let fruit = 'mango\'s juice' // single quote ma single quote vaprvo hoy to backward-slash(\) mukya pachhi single quote lakhay 
console.log(fruit)
console.log(fruit.length)  // ahiya \' ni length 1 j ganva ma aave chhe

let sentence4 = "my name \"kishu is name is cuteness" // here we use \" escape sequence character
console.log(sentence4)

let fruits = "banana\npapaya\ngraphs"  // \n is use for newline 
console.log(fruits)

// other escape sequence character example is = \r & \t