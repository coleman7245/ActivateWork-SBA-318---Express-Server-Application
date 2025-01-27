const express = require("express");
const router = express.Router();

const genres = require("../data/genres");
const error = require("../error/error");

router.route('/')
    .get((req, res) => {
        const links = [
            {
              href: "genres/:id",
              rel: ":id",
              type: "GET",
            },
          ];
      
        res.json({genres, links});
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