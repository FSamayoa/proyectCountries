
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivityByID");


const postActivitiesHandler = async (req, res) => {
    try {
        const { CountriesId, name, dificultad, duracion, temporada } = req.body;
        const postActivity = await postActivities(CountriesId, name, dificultad, duracion, temporada)
        res.status(201).send("Success: The activity has been successfully created.")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getActivities = async () => {
    try {
        const activities = await Activity.findAll({
            include: [
                {
                    model: Country,
                    attributes: ["id", "nombre"], // Puedes seleccionar las propiedades del país que desees
                },
            ],
        });
        return activities;
    } catch (error) {
        throw new Error("Error al obtener actividades");
    }
};


module.exports = {
    
    postActivitiesHandler,
    
}