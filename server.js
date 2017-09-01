var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/d2db";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/segments/get', function (req, res) {
    console.log("Got GET on /segments/get");
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("segments").find({}).toArray(function(err, result) {
            res.send(JSON.stringify(result));
            console.log("Sent result: ", JSON.stringify(result));
            db.close();
        });
    });
});
 
app.listen(3000);
