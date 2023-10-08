
// DOM tree refers to the html page where all the nodes are objects.

// there can be 3 main types of nodes in the DOM tree: 1.text nodes 2.element nodes 3.comment nodes

// in an html page, <html> is at the root and <head> and <body> are its children, etc.

// A text node is always a leaf of the tree

let a = document  // aakhu html page DOM object hoy chhe aetle document means aakhu html tag return thay document object tarike  
console.log(a)
console.log(typeof a)  // document( DOM- html in javascript) is object

let b = document.head // html no aakho head tag return thase
console.log(b)
console.log(typeof b)  // object

let c = document.body // html no aakho body tag retutn thase
console.log(c)
console.log(typeof c) // object

let e = document.documentElement  // html na badha element tag return karse
console.log(e)
console.log(typeof e) // object

let f = document.title // html nu title return kare
console.log(f)
console.log(typeof f)  // title is string type 
