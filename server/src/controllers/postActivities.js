const { Activity, Country } = require('../db');

const createActivity = async (req, res) => {
    try {
        const { name, dificultad, duracion, temporada, countryName } = req.body;

        // Agregar un registro para verificar si los datos se reciben correctamente
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

        // Agregar registros para verificar el proceso de creación
        console.log('Actividad creada:', newActivity.toJSON());

        // Relaciona la actividad con los países
        if (countryName.length > 0) {
            const countries = await Country.findAll({ where: { nombre: countryName } });

            if (countries.length === 0) {
              return res.status(400).json({ error: "No se encontraron países con ese nombre" });
            }
            
            await newActivity.setCountries(countries);
        }

        res.status(201).json(newActivity);
    } catch (error) {
        console.error('Error al crear la actividad:', error);

        // Cambia el código de estado a 500 para errores internos del servidor
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