const {getAllActivities} = require("../controllers/getAllActivities");
const {getActivityById} = require("../controllers/getActivityByID");
const {deleteActivity} = require("../controllers/deleteActivities");
const {updateActivity} = require ("../controllers/putActivities")
const {createActivity} = require ("../controllers/postActivities")


const postActivitiesHandler = async (req, res) => {
  try {
      const { name, dificultad, duracion, temporada, countryName } = req.body; // Asegúrate de que los campos coincidan con la solicitud
      const postActivity = await createActivity(name, dificultad, duracion, temporada, countryName); // Utiliza la función correcta
      res.status(201).json(postActivity);
  } catch (error) {
      res.status(404).json({ error: error.message });
  }
}

const getAllActivitiesHandler = async (req, res) => {
    try {
        const activities = await getAllActivities();
        res.status(200).json(activities);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getActivityByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const activity = await getActivityById(id);
        res.status(200).json(activity);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteActivityHandler = async (req, res) => {
    try {
      const { activityId } = req.params;
      const result = await deleteActivity(activityId);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  const updateActivityHandler = async (req, res) => {
    try {
      const { activityId } = req.params;
      const { newData } = req.body;
      const result = await updateActivity(activityId, newData);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
    
    postActivitiesHandler,
    getAllActivitiesHandler,
    getActivityByIdHandler,
    deleteActivityHandler,
    updateActivityHandler,
    
}