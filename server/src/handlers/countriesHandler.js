const { getAllCountries } = require('../controllers/getAllCountries');
const { getCountryById } = require('../controllers/getCountryByID')
const { getCountryByName } = require('../controllers/getCountryByName')

const getAllCountriesHandler = async (req, res) => {
    try {
        const countries = await getAllCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getCountryByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const findCountryId = await getCountryById(id)
        res.status(200).json(findCountryId)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getCountryByNameHandler = async (req, res) => {
    try {
        const { name } = req.params;
        const findCountries = await getCountryByName(name)
        res.status(200).json(findCountries)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getAllCountriesHandler,
    getCountryByIdHandler,
    getCountryByNameHandler
};
