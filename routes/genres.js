const express = require("express");
const {getGenres, postGenre, getGenre, patchGenre, deleteGenre} = require("../controllers/genrecontroller");
const router = express.Router();

router.route('/')
    .get(getGenres)
    .post(postGenre);

router.route('/:id')
    .get(getGenre)
    .patch(patchGenre)
    .delete(deleteGenre);

module.exports = router;