
const postActivities = require("../controllers/postActivities");


const postActivitiesHandler = async (req, res) => {
    try {
        const { CountriesId, name, dificultad, duracion, temporada } = req.body;
        const postActivity = await postActivities(CountriesId, name, dificultad, duracion, temporada)
        res.status(201).send("Success: The activity has been successfully created.")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    
    postActivitiesHandler,
    
}