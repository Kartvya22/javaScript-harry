
// alert - used to invoke mini window with a message
alert("Enter the value of a1!")

// prompt - used to take user input as string
let a1 = prompt("enter a1 here" , "22")  // In prompt we declare optional default value after comma(,)

// confirm - Shows a message and waits for the user to press OK or CANCEL.
// return true for OK and false for CANCEL
let write = confirm("Do you want to write it to the page?") 
if(write){
    document.write(a1)  // website page ma print karava mate
}
else{
    document.write("Please allow me to write number to the page.")
}
console.log(a1)  // console ma print karava mate
a1 = Number.parseInt(a1)
alert("now! the type of a1 is "+ typeof a1)

