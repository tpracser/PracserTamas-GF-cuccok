'use strict'

var sum = 0;

function summarizer(number){
  for(var i = 1; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i;
    }
  }
  return sum;
}

console.log(summarizer(1000));
