const { Activity, Country } = require('../db');

const updateActivity = async (activityId, newData) => {
  try {
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      throw new Error('La actividad con el ID proporcionado no se encontró.');
    }
    await activity.update(newData);

    if (newData.countryIds) {
      const countries = await Country.findAll({ where: { id: newData.countryIds } });
      await activity.setCountries(countries);
    }

    return 'La actividad ha sido actualizada con éxito.';
  } catch (error) {
    throw new Error('Error al actualizar la actividad: ' + error.message);
  }
};

module.exports = {
  updateActivity,
};