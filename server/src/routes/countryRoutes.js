const { Router } = require("express");
const { getAllCountriesHandler, getCountryByIdHandler, getCountryByNameHandler } = require("../handlers/countriesHandler");
const countryRoutes = Router()

countryRoutes.get("/countries", getAllCountriesHandler)
countryRoutes.get("/countries/:id", getCountryByIdHandler)
countryRoutes.get("/countries/name/:name", getCountryByNameHandler)

module.exports = countryRoutes