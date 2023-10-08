// Browser Events 
// An event is a signal that something has happend. all the DOM nodes generate such signals.

let a = document.getElementsByClassName('container')[0]

// we can handle the event in javascript like below

// here if we perform right click on container then this function is executed
a.oncontextmenu=()=>{
    console.log("container par right click thayu")
}

// jyare aapne html and javascript bannne ma same event mate code lakhiae to javascript valo code overwrite thase and javascript valo code j execute thase
a.onclick=()=>{
    console.log("I am overwrite for onclick event")
}
// ahiya onclick event mate html and javascript banne ma code hato pan execute javascript valo j code thase