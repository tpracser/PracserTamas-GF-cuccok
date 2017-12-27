'use strict'
var routes = ["z", "x"]
var moreDestination = ["x", "y", "z"];

function goToHoliday(destination, rules){
  var route1 = destination.indexOf(rules[0])
  var route2 = destination.indexOf(rules[1])
  // console.log(route1);
  // console.log(route2);
  if(route1 > route2){
    destination[route1] = rules[1]
    destination[route2] = rules[0]
  }
  return destination;
};

console.log(goToHoliday(moreDestination, routes));
