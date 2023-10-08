// String is immutable means String change na tahi sake (main string kyarey na change thay jem k aapde replace kariae pan ae khali replace thaine print thay pan change na thay aetle k aapde replace valu print karaya pachhi pan jo ae string pacchi print karavi ae to pela hati ae j string print thase)
let str = "kartvya bhai"
console.log(str.replace("kartvya", "kishu"))
console.log(str)

// jo mehod ma round-barackets () hoy to tene function kevay and na hoy to aene property kevay

let name1 = "Alpesh Bhai"
let name2 = "Piyush Bhai"

// String property

console.log(name1.length)

// String Methods

console.log(name1.toUpperCase())  // convert string to upper case string

console.log(name1.toLowerCase())  // convert string to lower case string

console.log(name1.slice(1,4))  // fetch substring of string by .slice function. if .slice(x,y) then we fetch x to y-1 index of substring

console.log(name1.slice(2)) // if .slice(p) then return p to end of the string

console.log(name1.replace("Alpesh" , "Mitesh")) // replace first value to next value in function
console.log(name1.replace("alpesh" , "kalu"))  // jo string as it is na lakhiae to replace nai thay . ahiya Alpesh ma A capital hato pan replace function ma small a lakhvathi replace thatu nathi

console.log(name1.concat(" is friend of ", name2, " OK "))  // .concate method ae ghani badhi string ne jodva mate vapray chhe
// concate karva mate alpviram ni jagya ae plus(+) pan vapri sakay
console.log("Very" + "Cute" + "Girl")

let name3 = "          Dixit  Bhai        "
console.log(name3)
console.log(name3.trim()) // .trim method is use for remove whitespace means ae aagal and pacchal ni khali space ne nikali de chhe


// print particular character
let name4 = "YASH"
console.log(name4[0]) // by index number we print particular character of string . here we print 0th index character
console.log(name4[1])
console.log(name4[2])
console.log(name4[3])
console.log(name4[4]) // jo index karta vadhare value aapiae to undefined return kare
console.log(name4[5])


// Question - use for loop to print a string
// answer :
let sentence = "Very cute"
for(let i=0 ; i<sentence.length ; i++) {
    console.log(sentence[i])
}