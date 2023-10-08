
let p = document.body.firstElementChild.firstElementChild
// for accessing the table(now p is table)
console.log(p) // print table

console.log("caption of table" , p.caption) // print caption of table

console.log("rows of table" , p.rows) // print rows of table

console.log("head of table" , p.tHead) // print head of table
console.log("first element of head of table" , p.tHead.firstElementChild) 
console.log("children of first element of head of table" , p.tHead.firstElementChild.children) 

console.log("foot of table" , p.tFoot) // here foot is not available so its return null

console.log("body of table" , p.tBodies) // collection of body of table
// ahiya 1 j body hovathi 1 body j return thay chhe

console.log(p.rows[0].cells) // for accessing the td and th 
// here we print rows[0] of th 

console.log(p.rows[1].rowIndex) //  it returns the index of selected row

