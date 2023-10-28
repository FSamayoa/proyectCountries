
const postActivities = require("../controllers/postActivities");
const {getAllActivities} = require("../controllers/getAllActivities");
const {getActivityById} = require("../controllers/getActivityByID");
const {deleteActivity} = require("../controllers/deleteActivities");
const {updateActivity} = require ("../controllers/putActivities")


const postActivitiesHandler = async (req, res) => {
    try {
        const { CountriesId, name, dificultad, duracion, temporada } = req.body;
        const postActivity = await postActivities(CountriesId, name, dificultad, duracion, temporada)
        res.status(201).send("Success: The activity has been successfully created.")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const getAllActivitiesHandler = async (req, res) => {
    try {
        const activities = await getAllActivities();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ error: error.message });
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
      res.status(400).json({ error: error.message });
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