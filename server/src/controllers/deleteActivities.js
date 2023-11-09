const { Activity } = require('../db');

const deleteActivity = async (activityId) => {
  try {
    const activity = await Activity.findOne(activityId);

    if (!activity) {
      throw new Error('La actividad con el ID no existe.');
    }

    await activity.destroy();

    return 'La actividad ha sido eliminada.';
  } catch (error) {
    throw new Error('Error al eliminar la actividad');
  }
};

module.exports = {
  deleteActivity,
};