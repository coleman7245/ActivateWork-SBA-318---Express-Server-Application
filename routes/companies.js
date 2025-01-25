const express = require("express");
const router = express.Router();

const companies = require("../data.companies");
const error = require("../error/error");

router
    .route('/')
        .get((req, res) => {
        const links = [
            {
                href : `/${req.params.id}`,
                rel : "",
                type : "PATCH"
            },
            {
                href : `/${req.params.id}`,
                rel : "",
                type : "DELETE"
            }
        ];

        if (titles)
            res.json({titles, companies});
        else
            next();
        })
        .post((req, res, next) => {

        });

        module.exports = router;