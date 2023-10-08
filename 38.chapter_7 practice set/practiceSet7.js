
// Chapter_7 & Question_1
let a = document.getElementsByTagName("nav")[0].firstElementChild
a.style.color = "red"
console.log(a)

// Chapter_7 & Question_2
 // ans is no because view source ma tbody nai batave karn k aapde code ma tbody no use karyo j nathi
 // jo aapdee inspect karine check kariae to tbody jova malse pan view source code ma tbody nai jova male jo code ma nai lakhyo hoy to

// Chapter_7 & Question_3
let b = document.getElementsByClassName("container-1")[0]
b.firstElementChild.style.color = "green"
b.lastElementChild.style.color = "green"
console.log(b)

// Chapter_7 & Question_4
 Array.from( document.getElementsByTagName("li") ).forEach(elements => {
    elements.style.background = "cyan" ;
 })
 

// Chapter_7 & Question_5
 // which of the following is used to look for the farthest ancestor that matches a given css selector
 // (a)matches (b)closest (c)contains (d)none of these
 // ans - (d) none of these because koi pan selector farthest ancestor nai aaptu 
 // closest ae closest ancestor aape chhe