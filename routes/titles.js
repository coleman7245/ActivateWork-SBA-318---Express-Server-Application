const {getTitles, postTitle, getTitle, patchTitle, deleteTitle} = require("../controllers/titlecontroller");
const express = require("express");
const router = express.Router();

// "id" : "Castle",
// "name" : "Breath of Fire 2",
// "genreId" : "rpg",
// "companyId" : "cap",
// "description" : ""

router.route('/')
    .get(getTitles)
    .post(postTitle);

router.route('/:id')
    .get(getTitle)
    .patch(patchTitle)
    .delete(deleteTitle);

module.exports = router;