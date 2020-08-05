const express = require("express");
const app = express();
const port = 3000;
var scores = [
    { name: "Edwin", score: 50 },
    { name: "David", score: 39 },
];

app.get("/", (req, res) => {
    res.send(
        "Welcome to High Score Server (now with expres.js).\nGo to /scores and check to latest scores."
    );
});

app.get("/scores", (req, res) => {
    res.json(scores);
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
