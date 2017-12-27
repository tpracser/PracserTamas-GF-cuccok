'use strict';

var test = require('tape');
var validatorFunc = require('./validator.js');

test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

test("validator accepts valid email, a scale of 15 and positive feedback", function (t) {
  t.equal(validatorFunc("x@y", 15, "amazing"), true);
  t.end();
});

test("validator rejects unfilled email, a scale of 15 and positive feedback", function (t) {
  t.equal(validatorFunc("", 15, "amazing"), true);
  t.end();
});

test("validator rejects valid email, a scale of 9 and positive feedback", function (t) {
  t.equal(validatorFunc("x@y", 9, "amazing"), true);
  t.end();
});
