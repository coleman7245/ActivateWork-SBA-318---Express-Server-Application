const express = require("express");
const router = express.Router();

const companies = require("../data/companies");
const error = require("../error/error");

// "id" : "cap",
// "name" : "Capcom",
// "country" : "Japan",
// "active" : true

router.route('/')
    .get((req, res) => {
        const links = [
            {
              href: "companies/:id",
              rel: ":id",
              type: "GET",
            },
          ];
      
        res.json({companies, links});
    })
    .post((req, res, next) => {
        if (req.body.id && req.body.name && req.body.country && req.body.active) {
            const company = {
                id : req.body.id,
                name : req.body.name,
                country : req.body.country,
                active : req.body.active
            }

            companies.push(company);
            res.json({company});
        }
        else
            next(error(400, "Insufficient data"));
    });

router.route('/:id')
    .get((req, res, next) => {
        const company = companies.find((c) => c.id == req.params.id);

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

        if (company) 
            res.json({company, links});
        else 
            next();
    })
    .patch((req, res, next) => {
        const company = companies.find((c, i) => {
            if (c.id === req.params.id) {
                for (const key in c.body) {
                    companies[i][key] = req.body[key];
                }

                return true;
            }
        });

        if (company)
            res.json({company});
        else
            next();
    })
    .delete((req, res, next) => {
        const company = companies.find((c, i) => {
            if (c.id === req.body.id) {
                companies.splice(i, 1);
                return true;
            }
        });

        if (company)
            res.json({company});
        else
            next();
    });

module.exports = router;