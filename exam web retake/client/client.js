'use strict';

console.log("on work");

var button = document.querySelector('#button');
var list = document.querySelector('ul');
var caseSelector = document.querySelector('.caseSelector');
var selected = caseSelector.options[caseSelector.selectedIndex].value;

button.addEventListener('click', function () {
    button.innerText = "loading";

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://localhost:3000/turnomatic', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    console.log(selected);
    var caseToSend = {
        "case": selected,
    };
    console.log(caseToSend);

    httpRequest.send(JSON.stringify(caseToSend))

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log(httpRequest.responseText);

                var answerData = JSON.parse(httpRequest.responseText);
                console.log(answerData);

                list.innerHTML += '<li>' + 'Your number is ' + answerData.number + '</li>';
            } else {
              alert('There was a problem with the request.');
            }
          }
      };
        button.innerText = "get another number";
});
