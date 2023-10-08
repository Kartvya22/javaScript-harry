
// setTimeout

// syntax - let variable_name(timer_id) = setTimeout(function,<delay>(in miliseconds),<arg 1>,<arg 2>,..)
// function ma jetla parameters hoy aetla j call karti vakhte arguments hoy
// setTimeout allows us to run a fumction once(only one time) after the given interval of time.

let a = setTimeout(function () {
    alert("I am inside of setTimeout")
}, 5000)
// it's run only one time after 5000 milisecond (5 second)

clearTimeout(a) // for clearing the setTimeout 
// clearTimeout is used to cancle the execution (incase we change our mind )

// let b = prompt("Do you want to run the setTimeout?")
// if (b != "yes") {  // yes input aapisu to j run thase nai to clear thai jase
//     clearTimeout(a)
// }

// console.log(a) // it's return 1 which is timer id of a 


// setInterval

// syntax - let variable_name(timer_id) = setInterval(function,<delay>(in miliseconds),<arg 1>,<arg 2>,..) // same syntax as setTimeout
// function ma jetla parameters hoy aetla j call karti vakhte arguments hoy
// setInterval allows us to run a function repeatdly(regularly) after the given interval of time.
// To stop further calls, we can use clearInterval(timer id)



const sum = (a,b,c,d) => {
    console.log("Sum ="+ " " + (a+b+c+d))
}

let p = setTimeout(sum,3000,5,3,2,3) // sum is name of function , 2000 is delay in milisecond & 5,3,2 and 3 is arguments for function
console.log("timer id is " + p)

let q
q = setInterval(sum,2000,1,2,3,4) // this run in every 2 second infinte time
console.log("timer id is " + q)
