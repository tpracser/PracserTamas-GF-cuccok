'use strict';

var numbers = [3, 4, 5, 6, 7];
// write a function that filters the odd numbers
// from an array and returns a new array consisting
// only the evens

function filter(list){
    var newArray = [];
    for(var i = 0; i < list.length; i++){
        if(list[i] % 2 === 0){
            newArray.push(list[i])
        }
    }
    return newArray;
}


//
// function filter(list) {
//     var newArray = [];
//     for(var i = 0; i < list.length; i++) {
//         if(list[i] % 2 === 0) {
//             newArray.push(list[i]);
//         }
//     }
//     return newArray
// }

console.log(filter(numbers))
