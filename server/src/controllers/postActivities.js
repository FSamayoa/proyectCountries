const { Activity, Country } = require('../db');

const createActivity = async (req, res) => {
    try {
        const { name, dificultad, duracion, temporada, countryName } = req.body;

        console.log('Datos recibidos:', name, dificultad, duracion, temporada, countryName);

        if (!name || !dificultad || !duracion || !temporada || !countryName) {
            return res.status(400).json({ error: "Datos incompletos" });
        }

        const [newActivity, created] = await Activity.findOrCreate({
            where: {
                name,
                dificultad,
                duracion,
                temporada,
            }
        });


        console.log('Actividad creada:', newActivity.toJSON());

        if (countryName.length > 0) {
            const countries = await Country.findAll({ where: { nombre: countryName } });

            if (countries.length === 0) {
              return res.status(404).json({ error: "No se encontraron países con ese nombre" });
            }
            
            await newActivity.setCountries(countries);
        }

        res.status(201).json(newActivity);
    } catch (error) {
        console.error('Error al crear la actividad:', error);

        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createActivity,
};

