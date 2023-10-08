let first = document.getElementById("first")

// .className is replaces the whole string of classes
// .className is change the element class to the described class and it's remove previous class(and also remove it's property)

first.className = "yellow kishu text-dark"
// it change the first element class to yellow,kishu and text-dark
// yellow class give background-color yellow and color white
// kishu is not defined in css so its not change anything but it is class of first element
// text-dark give color black


// .classList is give the list of all class to particular element
console.log(first.classList)
// it gives the all class of the first element and here total 3 classes


first.classList.remove("kishu")
// it is use for removing the kishu class from the first element

console.log(first.classList)
// it returns only 2 classes because kishu class is removed

first.classList.add("padding")
// it is use for add the new padding class to first element

console.log(first.classList)
// its returns 3 classes because padding class is added


// toggle method is use for if class is present then it's remove the class and if class is not present then it's add the class

first.classList.toggle("margin")
// here margin class is not parent in first element so it's add the margin class
console.log(first.classList)

first.classList.toggle("margin")
// here margin class is  parent in first element so it's remove the margin class
console.log(first.classList)

first.classList.toggle("margin")
// here margin class is not parent in first element so it's add the margin class
console.log(first.classList)


// .contains method is used to check the class is contains(present) or not in element 
// if class is present then it's return true and if class is not present then it's return false

console.log(first.classList.contains("text-dark"))
// it's return true because first element contains the text-dark class

console.log(first.classList.contains("kartvya"))
// it's return false because first element does not contains the kartvya class
