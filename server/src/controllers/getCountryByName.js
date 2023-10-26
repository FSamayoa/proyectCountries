const { Country, Activity } = require('../db');
const { Op } = require('sequelize')

const getCountryByName = async (name) => {
    if (!name) {
        throw Error("Ingresa un nombre de pais")
    }
    const getCountries = await Country.findAll({
        where: {
            nombre: {
                [Op.iLike]: `${name}%`
            }
        }, include: Activity
    })
    if (!getCountries.length) {
        throw Error("No existen paises con ese nombre")
    }
    return getCountries;
}

module.exports = {
    getCountryByName
}
