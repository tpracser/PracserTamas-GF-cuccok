'use strict';

console.log("on work");

var button = document.querySelector('#button');
var list = document.querySelector('ul');
var inputText = document.querySelector('#inputText');
var inputNumber = document.querySelector('#inputNumber');
var eMail = document.querySelector('#eMail');
var loading = document.querySelector('span');

button.addEventListener('click', function () {
  loading.classList.remove('hide');

var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', 'http://localhost:3000/exam', true);
httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.send(JSON.stringify({
    "feedback": inputText.value,
    "scale": inputNumber.value,
    "email": eMail.value,
}));

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
          var response = JSON.parse(httpRequest.responseText).response;

          list.innerHTML += '<li>' +  '</li>';
          loading.classList.add('hide');
        } else {
          alert('There was a problem with the request.');
        }
      }
  };
});

var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://localhost:3000/', true);
httpRequest.send(null);
httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var projects = JSON.parse(httpRequest.responseText).all;
        projects.forEach(function(item){
          list.innerHTML += '<li>' + item + '</li>';
        });
        loading.classList.add('hide');
      } else {
        alert('There was a problem with the request.');
      }
    }
};
