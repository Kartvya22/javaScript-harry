
// snake , water and gun GAME

// here s-snake, w-water and g-gun

const char = 'gsw'
function genereteString(length) {
    let result = ''
    const charLength = char.length
    for (let i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() * charLength))
    }
    return result
}
// console.log(genereteString(1))

let input1 = genereteString(1)
// console.log(input1)

let input2 = prompt("Enter only one out of S, W, G ")
// console.log(input2)

if(input1 == input2){
    alert("Match is draw")
}
else if(input1 == 'g' && input2 == 's'){
    alert("You loss the game.")
}
else if(input1 == 'g' && input2 == 'w'){
    alert("You win the game.")
}
else if(input1 == 's' && input2 == 'w'){
    alert("You loss the game.")
}
else if(input1 == 's' && input2 == 'g'){
    alert("You win the game.")
}
else if(input1 == 'w' && input2 == 's'){
    alert("You win the game.")
}
else if(input1 == 'w' && input2 == 'g'){
    alert("You loss the game.")
}
else{
    alert("Please enter valid input")
}