const express = require("express");
const bodyParser = require("body-parser");

const {getAPIRequests, getDataRequests} = require("./controllers/apicontroller");
const companies = require("./routes/companies");
const genres = require("./routes/genres");
const titles = require("./routes/titles");
const error = require("./error/error.js");

const app = express();
let port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/api/companies", companies);
app.use("/api/titles", titles);
app.use("/api/genres", genres);

app.get("/", getAPIRequests);

app.get("/api", getDataRequests);

app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});