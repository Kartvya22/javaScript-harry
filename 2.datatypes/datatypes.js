 // nn bb ss u - primitives data types

let a = null // null
let b = 345  // number
let c = true //can also be false //boolean
let d = BigInt(54) + BigInt(6)  //bigint
let e = Symbol("best symbol")  //symbol
let f = "kishu"  //string
let g = undefined  //undefined
let h // kai pan na lakhiae to pan ae undefined j  kevay

console.log(a, b, c, d, e, f, g, h)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)
// variable no datatypes dekhva mate typeof karine variables name lakhi devu


// Objects(non-primitives data types ) in javascripts
// objects construct key : value pair 
// objects mapping banava mate vapri sakay for ex. kyo student kya class thi belong kare ae mapping kari sakay
const item = {
    "kishu" : true,
    "kumar" : false,
    "lovish" : 67,
    "rohan" : "boy",
    "character" : 'a',
    "percentage" : 88.76
}
console.log(item)
// aakho object print karava mate 
console.log(item["percentage"])
// particular value print karava mate 
console.log(item["rohan"])