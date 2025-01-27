const titles = require("../data/titles");
const error = require("../error/error");

function deleteTitle(req, res, next) {
    const title = titles.find((t, i) => {
        if (t.id === req.body.id) {
            titles.splice(i, 1);
            return true;
        }
    });

    if (title)
        res.json({title});
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

    if (title) 
        res.json({title, links});
    else 
        next();
}

function getTitles(req, res) {
    const links = [
        {
          href: "titles/:id",
          rel: ":id",
          type: "GET",
        },
      ];
  
    res.json({titles, links });
}

function patchTitle(req, res, next) {
    const title = titles.find((t, i) => {
        if (t.id === req.params.id) {
            for (const key in t.body) {
                titles[i][key] = req.body[key];
            }

            return true;
        }
    });

    if (title)
        res.json({title});
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
        res.json({titles});
    }
    else
        next(error(400, "Insufficient data"));
}

module.exports = {getTitles, postTitle, getTitle, patchTitle, deleteTitle};