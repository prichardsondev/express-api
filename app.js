const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5001;

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/add", (req, res) => {

    let {v1,v2} = req.query;

    let sum = parseInt(v1) + parseInt(v2);
    res.json(sum);
});

app.listen(port, () => console.log(`Browse to localhost:${port}`));