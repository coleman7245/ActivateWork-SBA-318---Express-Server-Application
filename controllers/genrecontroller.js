const genres = require("../data/genres");
const error = require("../error/error");

function deleteGenre(req, res, next) {
    const genre = genres.find((g, i) => {
        if (g.id === req.params.id) {
            genres.splice(i, 1);
            return true;
        }
    });

    if (genre) {
        const data = [{genre}];
        res.render("genres/genres", {data});
    }
    else
        next();
}

function getGenre(req, res, next) {
    const genre = genres.find((g) => g.id == req.params.id);

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

    if (genre) {
        const data = [{genre, links}]; 
        res.render("genres/genres", {data});
    }
    else 
        next();
}

function getGenres(req, res) {
    if (req.query.limit) {
        const selected_genres = genres.slice(0, req.query.limit);
        const data = [{selected_genres}];
        res.render("genres/genres", {data});
    }
    else {
        const links = [
            {
            href: "genres/:id",
            rel: ":id",
            type: "GET",
            },
        ];
    
        const data = {genres, links};
        res.render("genres/genres", {data});
    }
}

function patchGenre(req, res, next) {
    const genre = genres.find((g, i) => {
        if (g.id === req.params.id) {
            for (const key in req.body) {
                genres[i][key] = req.body[key];
            }

            return true;
        }
    });

    if (genre) {
        const data = [{genre}];
        res.render("genres/genres", {data});
    }
    else
        next();
}

function postGenre(req, res, next) {
    if (req.body.id && req.body.name) {
        const genre = {
            id : req.body.id,
            name : req.body.name
        }

        genres.push(genre);
        const data = [{genre}];
        res.render("genres/genres", {data});
    }
    else
        next(error(400, "Insufficient data"));
}

module.exports = {getGenres, postGenre, getGenre, patchGenre, deleteGenre};