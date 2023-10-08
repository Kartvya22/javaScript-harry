
// chapter-1 & question-1
// create a variable of type string and try to add a numbers to it.
let a = "kishu";
let b = 5;
console.log(a + b)
console.log(b+a)



// chapter-1 & question-2
//use typeof operators to find the datatype of the string in last question
console.log(typeof (a+b))
 


// chapter-1 & question-3
//create a const object in javascript can you change it to hold a number later ?
const p = {
    name : "kishu",
    section : 1,
    isPrincipal : false
}
//p = 45; //error because p is const and it is not updatable
// p = { 
//     status : "single"  // error because we already use p object as const
// }
console.log(p)
// ans is no because const is not changable



// chapter-1 & question-4
//try to add a new to the const object in problem 3 were you able to do it ?
const r = {
    name : "kishu",
    age : 20,
    height : 168
}
r["semester"] = "sixth" //new key:value pair add in object r
r["name"] = "kartvya"  // name is updated kishu to kartvya
console.log(r)
// ans is yes, we can add a new to the const object



// chapter-1 & question-5
// write a js program to crete a word meaning dictionary of 5 words. 
const dict = {
    kishu : "kishu is my first name",
    kartvay : "kartvya is my second name",
    kishan : " kishan is my third name",
    kishor : "kishor is my forth name",
    kripal : "kripal is my fifth name"
}
console.log(dict)  // aakhu dict object print karava mate

// koi pan particular key ni value print karava mate niche aapeli 2 syntax vapray chhe
console.log(dict["kishor"])  // khali kishor key ni value print karava mate, key ne hamesa double quetation ma lakhavi
console.log(dict.kartvay)  // khali kartvya key ni value print karava mate
