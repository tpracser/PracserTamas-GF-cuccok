'use strict';

var z = 13;
// if z is between 10 and 20 print 'Sweet!'
// if less than 10 print 'More!',
// if more than 20 print 'Less!'

if (10 < z && z < 20) {         // 10 < z < 20   Ilyent nem irunk!
    console.log('Sweet!');
} else if (z < 10) {
    console.log('More!');
} else if (z > 20) {
    console.log('Less!');
}
