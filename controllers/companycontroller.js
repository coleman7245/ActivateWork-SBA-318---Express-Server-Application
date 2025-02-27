const companies = require("../data/companies");
const error = require("../error/error");

function deleteCompany(req, res, next) {
    const company = companies.find((c, i) => {
        if (c.id === req.params.id) {
            companies.splice(i, 1);
            return true;
        }
    });

    if (company) {
        const data = [{company}];
        res.render("companies/companies", {data});
    }
    else
        next();
}

function getCompanies(req, res) {
    if (req.query.limit) {
        const selected_companies = companies.slice(0, req.query.limit);
        const data = [{selected_companies}];
        res.render("companies/companies", {data});
    }
    else {
        const links = [
            {
            href: "companies/:id",
            rel: ":id",
            type: "GET",
            },
        ];
        
        const data = [{companies, links}];
        res.render("companies/companies", {data});
    }
}

function getCompany(req, res, next) {
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

    if (company) {
        const data = [{company, links}];
        res.render("companies/companies", {data});
    }
    else 
        next();
}

function patchCompany(req, res, next) {
    const company = companies.find((c, i) => {
        if (c.id === req.params.id) {
            for (const key in req.body) {
                companies[i][key] = req.body[key];
            }

            return true;
        }
    });

    if (company) {
        const data = [{company}];
        res.render("companies/companies", {data});
    }
    else
        next();
}

function postCompany(req, res, next) {
    if (req.body.id && req.body.name && req.body.country && req.body.active) {
        const company = {
            id : req.body.id,
            name : req.body.name,
            country : req.body.country,
            active : req.body.active
        }

        companies.push(company);
        const data = [{company}];
        res.render("companies/companies", {data});
    }
    else
        next(error(400, "Insufficient data"));
}

module.exports = {getCompanies, postCompany, getCompany, patchCompany, deleteCompany};