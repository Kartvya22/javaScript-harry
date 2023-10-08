
console.log(document.body.firstChild)
// for firstChild of any tag we use .firstChild here we fetch firstChild of body
// ahiya body ane firstChild(div) vache jagya hovathi #text return thase
// jo aapne body and div vache jagya n rakhiae to div tag return thase

console.log(document.body.lastChild)
// for lastChild of any tag we use .lastChild here we fetch lastChild of body


// hasChildNodes() function is use to check element have any children or not and it return true if element have children and false if element not have any children
console.log(document.body.hasChildNodes()) // here body have children so it returns true
console.log(document.body.lastChild.hasChildNodes())  // here body lastChild means script tag and it not have any children so it return false

console.log(document.body.childNodes)
// for all the children of body we use body.childNodes
// and aa jovathi aapnane array jevu dekhase pan actual ma array nathi 
// and aama apne array na function pan use na kari sakiae

// array ma fervava mate aapde niche ni method vapri sakiae
let arr = Array.from(document.body.childNodes)  // by this method we convert into array
console.log(arr)  
// array ma fervya pachhi have aapne aama apne array na function pan use kari sakiae chhiae