const express = require("express");
const app = express();
const port = 3000;
var scores = [
    { name: "Edwin", score: 50 },
    { name: "David", score: 39 },
];

// https://expressjs.com/en/4x/api.html#express.json
app.use(express.json());

app.get("/", (req, res) => {
    res.send(
        "Welcome to High Score Server (now with expres.js).\nGo to /scores and check to latest scores."
    );
});

app.get("/scores", (req, res) => {
    new_scores = scores
        .concat()
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    res.json(new_scores);
});

app.post("/scores", (req, res) => {
    scores.push(req.body);
    res.status(201);
    res.send(
        `The JSON was added into the score list succesfully!\n Check out the top 3 scores at /scores`
    );
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
