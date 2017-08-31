var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/d2db";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("segments").drop();
    db.createCollection("segments", function(err, res) {
        if (err) throw err;
        console.log("Collection segments created!");
        var SEGMENTS = [
            { _id: 1, xPos: "100px", yPos: "100px", wabadabbalabba: ["Wabbut", "Wabbet", 5] },
            { _id: 2, xPos: "100px", yPos: "200px" },
            { _id: 3, xPos: "100px", yPos: "300px" },
            { _id: 4, xPos: "100px", yPos: "400px" },
            { _id: 5, xPos: "200px", yPos: "100px" },
            { _id: 6, xPos: "200px", yPos: "200px" },
            { _id: 7, xPos: "200px", yPos: "300px" },
            { _id: 8, xPos: "200px", yPos: "400px" },
            { _id: 9, xPos: "300px", yPos: "300px" },
            { _id: 10, xPos: "400px", yPos: "300px" },
            { _id: 11, xPos: "500px", yPos: "300px" },
            { _id: 12, xPos: "600px", yPos: "300px" }
        ];
        db.collection("segments").insertMany(SEGMENTS, function(err, res){
            var query = {_id: 1};
            db.collection("segments").find(query).toArray(function(err, result) {
                console.log(result[0]._id);
                db.close();
            });
        });
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("players").drop();
    db.createCollection("players", function(err, res) {
        if (err) throw err;
        console.log("Collection players created!");
        var PLAYERS = [
            { xPos: "133px", yPos: "333px" }
        ];
        db.collection("players").insertMany(PLAYERS, function(err, res){db.close()});
    });

});
