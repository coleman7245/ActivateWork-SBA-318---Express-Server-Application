const {getCompanies, postCompany, getCompany, patchCompany, deleteCompany} = require("../controllers/companycontroller");
const express = require("express");
const router = express.Router();

// "id" : "cap",
// "name" : "Capcom",
// "country" : "Japan",
// "active" : true

router.route('/')
    .get(getCompanies)
    .post(postCompany);

router.route('/:id')
    .get(getCompany)
    .patch(patchCompany)
    .delete(deleteCompany);

module.exports = router;