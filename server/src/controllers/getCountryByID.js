const { Country, Activity } = require("../db");


const getCountryById = async (id) => {
    if (!id) throw Error("Error de busqueda")
    const findCountry = await Country.findOne({
        where: {
            id: id
        },
        include: Activity
    })
    if (!findCountry) throw Error("No existen datos para ese pais")
    return findCountry;
}


module.exports = {
    getCountryById
};