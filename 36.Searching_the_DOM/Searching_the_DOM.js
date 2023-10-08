
// 1. change the first card title to red by id

let p = document.getElementById("firstcardtitle")
// accessing the h1 tag by .getElementById method
p.style.color = "red"

// 2. css mathi select karva 2 method chhe querySelectorAll(aana vade badha element select thay) and querySelector(aana vade aek j first element select thay) aa banne ma jo class name vade select karvu hoy to agal .(dot) lagavo jo id vade karvu hoy to aagal #(hashtag) lagavavu

let r = document.querySelectorAll(".card-title")
// card-title class vala badha element select thai jase
// jo class vade select karvu to .classname vade select thay
r[0].style.color = "yello"  // uper id vade already red color aapelo chhe to red j rese yello nai thay
r[1].style.color = "green" // second card nu card title green thase
r[2].style.color = "blue"  // third card nu card title blue thase

console.log(r)
// je element ne card-title aevu class name hase te badha element nu list return thase

let s = document.querySelector(".kishuclass")
// kishuclass class valo khali pelo j element select thai jase
s.style.color = "black"  // pela go somewhere ne black color malse
s.style.background = "khaki" 

let t = document.querySelector("#kishuid")
// kishuid id valo element select thase
t.style.color = "red" // go somewhere ne red color malse

let u = document.body.querySelector(".card").getElementsByTagName("a")
// card class vala badha a tag select thase
console.log(u) // console ma jaine check karvu

let v = document.body.getElementsByTagName("a")
//  .getElementByTagName method vade tag name thi element slect kari sakiae chhiae
// body vala badha a tag select thase
console.log(v)

let w = document.getElementsByName("heart")
console.log(w)