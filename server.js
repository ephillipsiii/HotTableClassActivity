var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/resevation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
//Table Info saved to this array
var tables = [

]

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });