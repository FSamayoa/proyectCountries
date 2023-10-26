const fs = require('fs');
const path = require('path');
const { Country } = require('../db');

async function loadDataFromJson() {
    try {
        const filePath = path.join(__dirname, '../../api/db.json');
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(jsonData);

        if (Array.isArray(data.countries)) {
            for (const item of data.countries) {
                const languages = item.languages ? item.languages : { eng: 'Unknown' };
                const capital = item.capital ? item.capital[0] : 'Unknown';
                const timezone = item.timezones ? item.timezones[0] : 'Unknown';
                await Country.create({
                    id:item.cca3,
                    nombre: item.name.common,
                    image: item.flags.png,
                    capital,
                    poblacion: item.population,
                    region: item.region,
                    languages: languages.eng,
                    maps: item.maps.googleMaps,
                    timezone,
                   
                    
                });
            }

            console.log('Data loaded successfully');
        } else {
            console.error('Invalid data format: "countries" should be an array.');
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

module.exports = { loadDataFromJson };