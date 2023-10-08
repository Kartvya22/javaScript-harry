
// Chapter_5 & Question_1
/*
let arr1 = [38, 73, 92, 18, 45, 67]
let a1 = prompt("enter any number  you want to add : " )
a1 = Number.parseInt(a1)
arr1.push(a1) 
console.log(arr1)
*/

// Chapter_5 & Question_2
/*
let arr2 = [38, 73, 92, 18, 45, 67]
let a2
do {
    a2 = prompt("enter any number you want to add : " )
    a2 = Number.parseInt(a2)
    arr2.push(a2) 
}while(a2 != 0)
console.log(arr2)
*/

// Chapter_5 & Question_3
/*
let arr3 = [610, 15, 70, 24, 352, 100, 56, 60, 84, 90, 320]
let newarr3 = arr3.filter((number) => {
    return number % 10 == 0
})
console.log(newarr3)
*/

// Chapter_5 & Question_4
/*
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 35, 29]
let newarr4 = arr4.map((value) => {
    return (value * value)
})
console.log(newarr4)
*/

// Chapter_5 & Question_5
/*
let arr5 = [1, 2, 3, 4, 5, 6]
let newarr5 = arr5.reduce((k1,k2) => {
    return (k1 * k2)
})
console.log(newarr5)
*/
