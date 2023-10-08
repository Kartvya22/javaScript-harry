let a = prompt("hey whats your age")
// prompt is function for asking question 
console.log(a)
console.log(typeof a)  // prompt is always return string value

a = Number.parseInt(a)  // Converting the string to a number
console.log(typeof a)
 
// if-else conditions 
if(a>=18)
// jo condition true hase to if ma jase and jo condition false hase to else ma jase
{
    alert("This is a valid age")
}
else {
    alert("This is an invalid age")
}

let b = prompt("what is your age?")
b = Number.parseInt(b)
console.log(b)

// if condition
if(b>5)
// jo condition true hase to if ma jase and false hase to nai jay
{
    alert("your are very brave")
}


let c = prompt("Whats your age?")
c = Number.parseInt(c)
console.log(c)

// if else-if else conditions
if(c<=0){
    alert("This is an invalid age")
}
else if(c>0 && c<=9){
    alert("You are a kid and you can not even think of driving")
}
else if(c>9 && c<=18){
    alert("You are a kid and you can think of driving after 18")
}
else {
    alert("You can now drive as you are above 18")
}


// switch conditins 
let fruit = prompt("what you want to buy");
console.log(fruit)
switch (fruit)
// fruit ne case vali value sathe campare karvani jo match thay to ae case run thase 
 {
    case "papaya":
        console.log("papaya is 100$ per kg");
        break; // Break lagavu important chhe jo na lagaviae to condition true thay to aena niche no badho j code jate j execute thai jasse
    case "banana":
        console.log("banana is 30$ per kg");
        break;
    case "mango":
        console.log("mango is 80$ per kg");
        break;
    default :  // jo koi pan case run na thay to dafault case run thase
        console.log("This fruit is atmost 250$ per kg");
}


// let h = alert("hey kishu")
// // alert is function for showing you a message
// console.log(h)

