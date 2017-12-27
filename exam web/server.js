'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var validator = require('./validator.js');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jelszo1",
    database: "secretprojects"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db", err);
    return;
  }
  console.log("Connection established");
});

var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));


app.post('/exam/', function(req, res) {
  console.log(req.body);
  var text = req.body.feedback;
  var number = parseInt(req.body.scale);
  var mail = req.body.email
   var validator = validator(eMail, inputNumber, inputText);

  var response = {
    "status": "ok",
    "feedback": inputText.value,
    "scale": inputNumber.value,
    "email": eMail.value,
  };

  if (validator = false) {

    res.status(400);
    response = {
      "status": "error",
      "message": "thank you"
    };
    res.send(response);

  } else {

    con.query({
      sql: 'INSERT INTO feedbacks(feedback, scale, email) VALUES(?)',
    //   values: [inputText.value]
    //   values: [inputNumber.value].
    //   values: [eMail.value]
    }, function (err) {
      if(!err) {
      res.send(response);
    }
  });

  }

});

app.get('/exam', function(req, res) {

  con.query('SELECT * FROM projects', function (err, rows) {
    if(!err) {
      var rowsTextOnly = rows.map(function (row) {
        return row.projects;
      });
      res.send({
        all: rowsTextOnly
      });
    }
  });
});

app.listen(3000);
