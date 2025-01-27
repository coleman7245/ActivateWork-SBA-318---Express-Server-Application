function getAPIRequests(req, res) {
    const links = [
        {
            href : "/api",
            rel : "api",
            type: "GET"
        }
    ];

    res.render("index");
    //res.json({links});
}

function getDataRequests(req, res) {
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
}

module.exports = {getAPIRequests, getDataRequests};