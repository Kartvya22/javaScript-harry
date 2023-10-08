
// Array Map method - creates a new array by performing some operation on each array element but not change in existing arr
// Map method return array
// same as foreach loop but foreach loop not create new array and .map create new array
let arr = [34, 45, 56]
let a = arr.map((value, index, array) => {  // here value,index,array is aarguments
    console.log(value, index, array)
    return value + 20 // creating new array with adding 20 in every element
})
console.log(a)  // return array as output
console.log(arr)  // not change in existing array


// Array Filter method - koi condition aapeli hoy , je value mate true hoy ae j value print thay
// filter method return array
let arr2 = [34, 4, 32, 46, 7, 83, 6, 2]
let a2 = arr2.filter((p) => {
    return p < 10
})
console.log("element that is less than 10 are ", a2) // return array as output
console.log(arr2)  // not change in existing array


// Array reduce method - reduce an array to a single value
// reduce method return single value
let arr3 = [1, 2, 3, 6, 4, 5, 2, 3]
let newarr3 = arr3.reduce((k1, k2) => {
    return k1 + k2
})
console.log(newarr3) // return only single value

// above reduce method ne niche pramane pan lakhi sakay
let arr4 = [1, 2, 3, 6, 4, 5, 2, 3]
const reduce_func = (k1, k2) => {
    return k1 + k2
}
let newarr4 = arr4.reduce(reduce_func)
console.log(newarr3)