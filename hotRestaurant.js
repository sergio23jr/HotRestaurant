const express = require("express");

const app = express();
const PORT = 3000;

let reservations = [];

let waitingList = [];

app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.send("Welcome to restuarant");
});

app.get("/reserve", function (req, res) {
    // res.sendFile(path.join(__dirname, "makereservation.html"));
    res.send("Welcome to reservation");
});

app.get("/tables", function (req, res) {
    // res.sendFile(path.join(__dirname, "viewtables.html"));
    res.send("Welcome to tables");
});

app.get("/api/reservations", function (req, res) {
    res.send("Here is the api data");
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});