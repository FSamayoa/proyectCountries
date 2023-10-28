const { Activity } = require('../db');

const deleteActivity = async (activityId) => {
  try {
    const activity = await Activity.findOne(activityId);

    if (!activity) {
      throw new Error('La actividad con el ID proporcionado no se encontró.');
    }

    await activity.destroy();

    return 'La actividad ha sido eliminada con éxito.';
  } catch (error) {
    throw new Error('Error al eliminar la actividad: ' + error.message);
  }
};

module.exports = {
  deleteActivity,
};