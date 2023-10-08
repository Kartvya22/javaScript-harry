
let first = document.getElementById("first")
// first id vala element ne select karva mate
// here, first means first id valo element

// elem.getAttrubute(name) method used to get the value of an attributes
let a = first.getAttribute("class")
console.log(a)

// elem.hasAttribute(name) method used to check for existance of an attributes
// this method return true if attribute is exist and false if attributes is not exist
console.log(first.hasAttribute("style"))
// it return false because style is not attributes of first element 
console.log(first.hasAttribute("class"))
// it return true because class is attributes of first element 


// elem.setAttribute(name,value) method used to set the value of an attributes
// first.setAttribute("hidden","true")
// for hidding the first element content
first.setAttribute("class","kishu kartvya")
// for set the first element class to kishu and kartvya

console.log(first.getAttribute("class"))
// it returns the edited class name by setAttribute method


// elem.Attributes method is used to get the collection of all attributes 
console.log(first.attributes)


// elem.removeAttribute(name) method is used to remove the attributes from element
console.log(first.removeAttribute("class"))
// it remove the class attributes from first element
// check the inspect in beowser and go to element , class attribute is removed from the first element in html


console.log(first.attributes)


// => data-* ( custome attribute - user can create it's own custome attribute)

// elem.dataset method is used to get collection of all custome attributes ( data-* attributes)
let x = first.dataset
// it returns all the data-* attributes of first element
console.log(x)

// if an element has an attribute named "data-game", its available as element.dataset.game
let y = first.dataset.game
// it's return the value of data-game attributes
console.log(y)
console.log(first.dataset.player)
// it's return the value of data-player attributes
console.log(first.dataset.player_name)
// it's return the value of data-player_name attributes
