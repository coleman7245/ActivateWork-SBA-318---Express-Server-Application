const genres = require("../data/genres");
const error = require("../error/error");

function deleteGenre(req, res, next) {
    const genre = genres.find((g, i) => {
        if (g.id === req.body.id) {
            genres.splice(i, 1);
            return true;
        }
    });

    if (genre)
        res.json({genre});
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

    if (genre) 
        res.json({genre, links});
    else 
        next();
}

function getGenres(req, res) {
    const links = [
        {
          href: "genres/:id",
          rel: ":id",
          type: "GET",
        },
    ];
  
    res.json({genres, links});
}

function patchGenre(req, res, next) {
    const genre = genre.find((g, i) => {
        if (g.id === req.params.id) {
            for (const key in g.body) {
                genres[i][key] = req.body[key];
            }

            return true;
        }
    });

    if (genre)
        res.json({genre});
    else
        next();
}

function postGenre(req, res, next) {
    if (req.body.id && req.body.name) {
        const genre = {
            id : req.body.id,
            name : req.body.name
        }

        genre.push(genre);
        res.json({genre});
    }
    else
        next(error(400, "Insufficient data"));
}

module.exports = {getGenres, postGenre, getGenre, patchGenre, deleteGenre};