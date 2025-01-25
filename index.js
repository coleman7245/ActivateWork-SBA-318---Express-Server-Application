const express = require("express");

const companies = require("./data/companies");
const genres = require("./data/genres");
const titles = require("./data/titles");

const error = require("./error/error.js");

const app = express();

let port = 8080;

app.use(companies);

app.get("/", (req, res) => {
    res.send("<h1>Here I am!</h1>");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});