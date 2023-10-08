//javascript have 3 types of variables type 1.var, 2.let, 3.const
// var no upyog navi updated javascript ma karvama aavto nathi aetle aapde mostly let and const no j upyog karisu

// var is redeclarable and updatable
var a = 10;
var a = 13; // var ma redeclaration pan thai sake chhe
a = 45;
console.log(a)
var b;  //var variables ne initialize na kariae to chale aene pachal thi assign kari sakay
b = 40;
b = "kishu";
console.log(b)
{
    var b = "kumar"; // var ma aek var update thaya pachhi block bar pan value update thai jase
    console.log(b)
}
console.log(b)

// let is not redeclarable but updatable
let c = 10;
//let c = 15; // error because c is already declared
c =  "hello"; 
console.log(c)
{
    let c = 67; //alag block mate declaration jaruri hoy chhe
    console.log(c)  //block ma updated value ae block mate j updated kevay jevu block mathi bar niklse to aeni value block bar je value hase ae j thai jase
}
console.log(c)

// const variable is non-redeclarable and non-updatable

const g = 87;

//const g = 45; // error because g is already declared

//g = "hii" // error because const variable is not updatable

//const h; //error because h is not initialized
//h = 55;
{
    const g = 64; //block ni andar g ne update kari sakay chhe
    console.log(g)
}
console.log(g)