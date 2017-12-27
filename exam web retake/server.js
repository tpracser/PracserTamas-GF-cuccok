var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')
// var add = require('./add.js');

var app = express();
app.use(bodyParser())
app.use(express.static('client')); // a client mappabol

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jelszo1',
  database: 'turnomatic'
});

// connection.connect()

connection.connect(function(err){
  if(err){
    console.log("Error connecting to Db", err);
    return;
  }
    console.log("DB connection established");
});

app.post('/turnomatic', function(req, res) {
    var caseOne = req.body.case;
    console.log(req.body.case);

    var query = {
        sql: 'INSERT INTO cases (case_type) VALUES (?)',
        values: [caseOne]
    }
    console.log(query);

    connection.query(query, function(err, rows) {
        console.log(rows);
        var sendBack = {
            "status": "ok",
            "number": rows.insertId
        }
        var errorMessage = {
            "status": "error",
            "message": "server error, please find a member of staff to get your number"
          }

        if (err) {

            res.status(500).send(JSON.stringify(errorMessage))
        }
            res.status(200).send(JSON.stringify(sendBack));
    })
})

app.listen(3000);
