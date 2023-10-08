
// snake , water and gun GAME

// here s-snake, w-water and g-gun

let user = prompt("Enter s, w or g")
let cpuI = Math.floor(Math.random()*3) // for taking input from cpu randomly
let cpu = ["s", "w", "g"][cpuI]

const match = (cpu, user) => {
    if(cpu == user){
        return "DRAW"
    }
    else if(cpu === "s" && user === "w"){
        return "CPU"
    }
    else if(cpu === "s" && user === "g"){
        return "USER"
    }
    else if(cpu === "g" && user === "w"){
        return "USER"
    }
    else if(cpu === "g" && user === "s"){
        return "CPU"
    }
    else if(cpu === "w" && user === "s"){
        return "USER"
    }
    else if(cpu === "w" && user === "g"){
        return "USER"
    }
    else {
        return "Please enter valid input"
    }
}

let result = match(cpu, user)
console.log(`CPU : ${cpu} \nUSER : ${user} \nThe winner is : ${result}`)