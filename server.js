var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/d2db";

app.get('/api/segments/get', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("segments").find({}).toArray(function(err, result) {
            res.send(JSON.stringify(result));
            db.close();
        });
    });
});
 
app.listen(3000);
