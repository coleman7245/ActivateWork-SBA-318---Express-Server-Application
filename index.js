const express = require("express");
const bodyParser = require("body-parser");

const companies = require("./routes/companies");
const genres = require("./routes/genres");
const titles = require("./routes/titles");

const error = require("./error/error.js");

const app = express();
let port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use("/api/companies", companies);
app.use("/api/titles", titles);
app.use("/api/genres", genres);

app.get("/", (req, res) => {
    const links = [
        {
            href : "/api",
            rel : "api",
            type: "GET"
        }
    ];

    res.json({links});
});

app.get("/api", (req, res) => {
    const links = [
        {
            href : "api/companies",
            rel : "companies",
            type: "GET"
        },
        {
            href : "api/companies",
            rel : "companies",
            type: "POST"
        },
        {
            href : "api/titles",
            rel : "titles",
            type : "GET"
        },
        {
            href : "api/titles",
            rel : "titles",
            type : "POST"
        },
        {
            href : "api/genres",
            rel : "genres",
            type : "GET"
        },
        {
            href : "api/genres",
            rel : "genres",
            type : "POST"
        }
    ];

    res.send(links);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});