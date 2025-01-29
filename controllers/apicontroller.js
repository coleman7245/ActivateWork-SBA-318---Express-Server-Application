function getAPIRequests(req, res) {
    const links = [
        {
            href : "/api",
            rel : "api",
            type: "GET"
        }
    ];

    const data = [{links}];
    res.render("index", {data});
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

    const data = [{links}];
    res.render("index", {data});
}

module.exports = {getAPIRequests, getDataRequests};