const titles = require("../data/titles");
const error = require("../error/error");

function deleteTitle(req, res, next) {
    const title = titles.find((t, i) => {
        if (t.id === req.params.id) {
            titles.splice(i, 1);
            return true;
        }
    });

    if (title) {
        const data = [{title}];
        res.render("titles/titles", {data});
    }
    else
        next();
}

function getTitle(req, res, next) {
    const title = titles.find((t) => t.id == req.params.id);

    const links = [
    {
        href: `/${req.params.id}`,
        rel: "",
        type: "PATCH",
    },
    {
        href: `/${req.params.id}`,
        rel: "",
        type: "DELETE",
    },
    ];

    if (title) {
        const data = [{title, links}]; 
        res.render("titles/titles", {data});
    }
    else 
        next();
}

function getTitles(req, res) {
    if (req.query.limit) {
        const selected_titles = titles.slice(0, req.query.limit);
        const data = [{selected_titles}];
        res.render("titles/titles", {data});
    }
    else {
        const links = [
            {
            href: "titles/:id",
            rel: ":id",
            type: "GET",
            },
        ];
    
        const data = [{titles, links}];
        res.render("titles/titles", {data});
    }
}

function patchTitle(req, res, next) {
    const title = titles.find((t, i) => {
        if (t.id === req.params.id) {
            for (const key in req.body) {
                titles[i][key] = req.body[key];
            }

            return true;
        }
    });

    if (title) {
        const data = [{title}];
        res.render("titles/titles", data);
    }
    else
        next();
}

function postTitle(req, res, next) {
    if (req.body.id && req.body.name && req.body.genreId && req.body.companyId && req.body.description) {
        const title = {
            id : req.body.id,
            name : req.body.name,
            genreId : req.body.genreId,
            companyId : req.body.companyId,
            description : req.body.description
        }

        titles.push(title);
        const data = [{titles}];
        res.render("titles/titles", {data});
    }
    else
        next(error(400, "Insufficient data"));
}

module.exports = {getTitles, postTitle, getTitle, patchTitle, deleteTitle};