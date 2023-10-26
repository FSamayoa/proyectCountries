const { Country} = require('../db');

const getAllCountries = async () => {
    try {
        const countries = await Country.findAll();
        return countries 
    } catch (error) {
        throw new Error('Internal server error');
    }
};

module.exports = {
    getAllCountries,
};