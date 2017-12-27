'use strict';

var students = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Gerzson', age: 10, candies: 1},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Teodor', age: 3, candies: 2}
];


// create a function that counts the students that
// has more than 4 candies

function candy_meter(array){
    var studWithMoreThanFourCandies = array.filter(function(item){
        return item.candies > 4;
    });
    return studWithMoreThanFourCandies.length;
}

console.log(candy_meter(students));




// function studentCounter(array){
//     return array.filter(function(student){
//         return student["candies"] > 4;
//     }).length
// }
// Itt hozzafuztem a filterezett cucchoz a hosszat, mig alatta a
//  filterezett cuccot valtozokent adom meg es utana ennek nezem a hosszat


// function studentCounter(array){
//     var studWithMoreThanFourCandies = array.filter(function(student){
//         console.log(student);
//         return student["candies"] > 4;
//     })
//     return studWithMoreThanFourCandies.length;
// }
//
// console.log(studentCounter(students));
