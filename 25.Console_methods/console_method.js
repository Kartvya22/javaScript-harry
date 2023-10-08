// Console Methods

// 1. console.log()
console.log("Hi my name is kishu") // print karava mate
// info vala section ma batave chhe

// 2. console.error()
console.error("Hi my name is unknown") // print kare chhe pan error na form ma
// error form ma means k red line ma batave chhe error ni style hoy ae rite
// error vala section ma batave chhe

// 3. console.assert()
console.assert(53 > 5) // jo assert ma condition true hase to kai nai thay
console.assert(5 > 53) // pan jo assert ma condition false hoy to assertion failed batave chhe
// error vala section ma batave chhe

// 4.console.clear()
// console.clear() // console ne clear karva mate use thay chhe

// 5. console.table()
let obj = { a: 1, b: 2, c: 3, d: 4 }
console.table(obj) // table style ma print karava mate
// info vala section ma batave chhe

// 6. console.warn()
console.warn("Please don't drink soda") // print kare chhe pan warning na form ma
// warning form ma means k yellow line ma batave chhe warning ni style hoy ae rite
// warning vala section ma batave chhe

// 7. console.info()
console.info("This is an important sentence") // print karva mate vapray chhe , info and log method similar j hoy chhe
// info vala section ma batave chhe

// 8. console.time()  &  console.timeEnd() - bracket ma hamesa same lable(value) rakhvu
// koi pan process ne processing thata ketlo time lage chhe ae janva mate .time & .timeEnd both method no use thay chhe
console.time("process1") // time when the process1 is starting
console.timeEnd("process1")  // time when the process1 is ending

// Question - compare for loop time with while loop time
 
console.time("forLoop") // time when the for loop is starting
for( let i=0; i<5; i++){
    console.log(i)
}
console.timeEnd("forLoop") // time when the for loop is ending

console.time("whileLoop") // time when the while loop is starting 
let i=0
while(i<5){
    console.log(i)
    i++
}
console.timeEnd("whileLoop") // time when the while loop is ending

