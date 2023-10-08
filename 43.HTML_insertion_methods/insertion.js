let a = document.getElementsByTagName("div")[0]
// it select the first div tag means container class valo div tag select thase

// // classical insertion method 
// a.innerHTML = a.innerHTML + "<h2> Hello World! </h2>"
// // above is classical way to insert any element in html

let div = document.createElement("div")
div.className = "piyush"
div.innerHTML = "<h1> i am good boy </h1>"

// a.prepend(div)
// // insert at the beginning of node
// // container ni andar j starting ma add thay chhe
// a.append(div)
// // apend at the end of node
// // container ni andar j ending ma add thay chhe

// a.before(div)
// // insert before node
// // container ni exact before(aagal) add thay chhe
// a.after(div)
// // insert after node
// // container ni exact after(pacchi) add thay chhe

// a.replaceWith(div)
// // replace node with the given node
// // container vala div ni jagya ae navo div replace thai jase