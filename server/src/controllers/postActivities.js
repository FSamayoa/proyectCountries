// const { Activity, Country } = require('../db');

// const createActivity = async (req, res) => {
//     try {
//         const { name, dificultad, duracion, temporada, countryIds } = req.body;

//         if (!name || !dificultad || !duracion || !temporada || !countryIds) {
//             return res.status(400).json({ error: "Datos incompletos" });
//         }

//         const [newActivity, created] = await Activity.findOrCreate({
//             where:{
//             name,
//             dificultad,
//             duracion,
//             temporada,
//             }
//         });

//         // Relaciona la actividad con los países
//         if (countryIds.length > 0) {
//             const countries = await Country.findAll({ where: { id: countryIds } });
//             await newActivity.setCountries(countries);
//         }

//         res.status(201).json(newActivity);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     createActivity,
// };

const { Activity, Country } = require('../db');

const createActivity = async (req, res) => {
    try {
        const { name, dificultad, duracion, temporada, countryName } = req.body;

        if (!name || !dificultad || !duracion || !temporada || !countryName) {
            return res.status(400).json({ error: "Datos incompletos" });
        }

        const [newActivity, created] = await Activity.findOrCreate({
            where:{
            name,
            dificultad,
            duracion,
            temporada,
            }
        });

        // Relaciona la actividad con los países
        if (countryName.length > 0) {
            const countries = await Country.findAll({ where: { nombre: countryName } });
            await newActivity.setCountries(countries);
        }

        res.status(201).json(newActivity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createActivity,
};