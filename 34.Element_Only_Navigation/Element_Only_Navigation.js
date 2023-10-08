// jo parent elemet and child element athva sibling element vache space hoy to valid output malse nai means k comment node athva text node kai pan mali sake
// aavu na thay aena mate vache Element keyword no upyog karvo 
// for ex. firstChild-firstElementChild , nextSibling-nextElementSibling 
 
 let b = document.body
 
 console.log("First child of b is : " , b.firstChild)
 // by the use of .firstChild method it return any first child ( node like text,comment, etc.)
 // here it return comment not nav element
 console.log("First Element child of b is " , b.firstElementChild)
 // by the use of .firstElementChild method it return only first valid Element child
 // here it return nav element ( nav ir first valid child of body)

 let c = document.body.firstElementChild.firstElementChild.children
 // here by .children method we print all the children of particular element 
 // here body first child is nav and nav first child is ul and ul children is 3 li.
 console.log(c)

// changing the background of p(paragraph tag) by javascript
// creating function
 const changeBgRed = () => {
    document.body.firstElementChild.nextElementSibling.firstElementChild.style.background = "red"
 }
 // call function
 console.log(changeBgRed()) 