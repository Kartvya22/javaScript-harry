// function no use repetative code ne aek j var lakhva mate thay chhe
function OnePlusAvg(x,y) 
// here OnePlusAvg is function name , x and y is parameter
{
    return 1+((x+y)/2)
    console.log("Done")
}

let a = 1
let b = 2
let c = 3

console.log("One Plus Average Of a and b is " , OnePlusAvg(a,b)) // function no use aapde function nu name and parameter lakhine kari sakiae chhiae
console.log("One Plus Average Of b and c is " , OnePlusAvg(b,c))
console.log("One Plus Average Of c and a is " , OnePlusAvg(c,a))

// below is the another way to create a function
// aane arrow function kevay
// aadhunic javascript ma aa rite function banava ma aave chhe
const sum = (p,q) => { // sum is function name , p and q is parameter
    return p+q
}

console.log("Sum Of a and b is " , sum(a,b)) // function no use aapde function nu name and parameter lakhine kari sakiae chhiae
console.log("Sum Of b and c is " , sum(b,c))
console.log("Sum Of c and a is " , sum(c,a))


// parameter vagarna function pan banavi sakay chhe
const hello = () => { // hello is function name and here parameter is not used
       console.log("hello am to majama yarooo")
       return "hii"
}
hello() // function ne invoke(use karvo) to karavu j pade to j te run thay and ahiya return value print nai thay
// jo function koi value return kartu hoy tene pan print karavu hoy to variable define karine tema function invoke karavu pade
let v = hello()
console.log(v)