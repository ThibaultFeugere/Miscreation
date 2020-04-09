var express = require("express");
var app = express();

/* Route / (index) */
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

/* Route /status */
app.get("/status", function(req, res) {
    res.send("OK !");
});

var port = 1337;
app.listen(port, function() {
    console.log('Express Node.js server running on port 1337.')
})