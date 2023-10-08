
// There are three important methods to search the DOM

let a = document.getElementById("id1")
console.log(a) // id1 id valo element return thase

let b = document.getElementsByClassName("box-2")
console.log(b) // box-2 class valo element return thase


// 1 - .matches method

// .matches method ae check kare chhe k banne element same chhe j nai
// jo same hoy to true return karse and jo na hoy to false retutn karse

console.log(a.matches(".kishu"))
// jo a(id1 id vala) element no class kishu hase to true return karsse otherwise false
// here kishu is not class of a element so its return false

console.log(a.matches(".box-1"))
// here box-1 is class of a element so its return true 


// 2 - .closest method

// .closest method check the closest ancestor(parent) match the given element
// if its match to itself or any parent element so its return elments otherwise return null

console.log(sp1.closest("#sp1"))
// its return span element because it is the itself element

console.log(sp1.closest(".box-1"))
// its return .box-1 class elment because its parent of sp1

console.log(sp1.closest(".box-2"))
// its return null because it is not parent of sp1



// 3 - .contains

// syntax - elemA.contains(elemB)
// it return true if elemB is inside elemA( a descendant of elemA) or when elemA == elemB

let c = document.getElementById("sp1")

console.log(sp1.contains(c))
// its return true because both elments are same
console.log(c.contains(id1))
// its return false because id1(div-1) element is not inside of c(sp1 span) element
console.log(id1.contains(c)) 
// its return true because c ( sp1 span ) element is inside of id1(div-1) element 
console.log(id2.contains(c))
// its return false because c ( sp1 span ) element is not inside of id2 (div-2) element