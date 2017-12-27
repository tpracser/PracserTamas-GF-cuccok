'use strict'

// ## 15.
// Create a function that takes a string and splits it to a list of two character strings like:
// `"abcdef"` becomes `["ab", "cd", "ef"]`

var original = "ritmikuscsimpifon";
var newArr = [];

function splitter(string){
    for(var i = 0; i < string.length-1; i += 2) {
        newArr.push(string[i]+string[i+1])
    };
    return newArr;
}

console.log(splitter(original));

//
// function splitter(string){
//     if(string % 2 === 0){
//         for(var i = 0; i < string.length-1; i +=2) {
//             newArr.push(string[i]+string[i+1])
//         };
//         return newArr;
//     } else {
//         for(var i = 0; i < string.length-2; i +=2) {
//             newArr.push(string[i]+string[i+1])
//         };
//         newArr.push(string[string.length-1])
//         return newArr;
//     }
// }
//
// console.log(splitter(original));
