'use strict';


function validator (eMail, inputNumber, inputText) {
    var at = "@";
    var words = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];

    if(eMail.value.same("@") && inputNumber.value >= 10 && words.inputText.value.some(words)){
        return true;
    } else {
        return false;
    };


};

module.exports = validator;
