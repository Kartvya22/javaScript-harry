let first = document.getElementById("first")
// first id vala element ne select karva mate


// let x = document.getElementsByTagName("span")[0]
// console.log(x)
// // console.log ae element ptint karse

// let y = document.getElementsByTagName("span")[0]
// console.dir(y)
// // console.dir ae element ne object tarike print karave chhe with its properties

// // The innerHTML property allows to get the HTML inside the element as a string and it's valid for element nodes only
// // innerHTML is valid only for element nodes. for other node types we can use nodevalue or data.

// let a = first.innerHTML
// console.log(a)
// // first id vali html print karava mate

// let b = (first.innerHTML = "<i>hey i am italic </i>")
// // first element ma html add karva mate
// console.log(b)
// // add kareli html print karava mate
// console.log(document.body)



// // The outerHTML property contains the full HTML(ineerHTML + The element itself)

// let c = first.outerHTML
// // innerHTML and element pote banne print thase
// console.log(c)

// let d = (first.outerHTML = " <div> hey </div>")
// console.log(d)
// console.log(document.body)


// console.log(document.body.firstChild)
// // for first child of body
// console.log(document.body.firstChild.data)
// // for data of first child of body 
// console.log(document.body.firstChild.nodeValue)
// // for noce value of first child of body


let e = document.body.textContent
// aakha body ma jetlo text hase ae show karse tag name sivay
console.log(e)

let f = first.hidden
// je first ma hase te element and content ne hide karva maate
console.log(f) 
// jo koi element hide hoy to true return karse

let g = (first.hidden = false)
// hidden thayela element pachha dekhava lagse
console.log(g)
// its return false because element or content is not hidden 

