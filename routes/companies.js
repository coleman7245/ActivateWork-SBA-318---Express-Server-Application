const express = require("express");
const router = express.Router();

const companies = require("../data/companies");
const error = require("../error/error");

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

    });

router.route('/:id')
    .get((req, res, next) => {

    })
    .post((req, res, next) => {

    })
    .patch((req, res, next) => {

    })
    .delete((req, res, next) => {

    });

module.exports = router;