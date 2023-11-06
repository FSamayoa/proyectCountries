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



// const { Activity, Country } = require('../db');

// const createActivity = async (name, dificultad, duracion, temporada, countryName) => {
//     try {
//         if (!name || !dificultad || !duracion || !temporada || !countryName) {
//             return { error: "Datos incompletos" };
//         }

//         // Verifica si la actividad ya existe (puedes usar un campo único o lógica personalizada para evitar duplicados)

//         // Crea la actividad
//         const newActivity = await Activity.create({
//             name,
//             dificultad,
//             duracion,
//             temporada,
//         });

//         // Relaciona la actividad con los países
//         if (countryName.length > 0) {
//             const countries = await Country.findAll({ where: { nombre: countryName } });
//             await newActivity.setCountries(countries);
//         }

//         return newActivity;
//     } catch (error) {
//         return { error: error.message };
//     }
// };

// module.exports = {
//     createActivity,
// };