const express = require("express");
const app = express();
const path = require("path")


app.get("/flappy-bird", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/game.html'));
})

app.get("/game-over", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/main.html'));
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/main.html'));
})

// use the express-static middleware
app.use(express.static("."));



// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));