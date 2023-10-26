const { Activity, Country } = require('../db');
const getCountryById = require('../controllers/getCountryByID')

const postActivities = async (CountriesId, name, dificultad, duracion, temporada) => {
   
  if (!CountriesId || !name || !dificultad || !duracion || !temporada) {
    throw new Error("datos incompletos")
  }

  let paisesActivities = 0

  for (const countryId of CountriesId) {
    const findCountry = await getCountryById(countryId)
    if (!findCountry) {
      throw new Error(`el pais con id ${countryId} no fue encontrado.`)
    }
    paisesActivities++;
  }

  if (paisesActivities === CountriesId.length) {
    const createActivitie = await Activity.create({ name, dificultad, duracion, temporada })

    for (const countryId of CountriesId) {
      const findCountry = await getCountryById(countryId)
      await findCountry.addActivity(createActivitie)
    }

    return createActivitie;
  } else {
    throw new Error("no pudieron añadirse las actividades.")
  }
}

module.exports = postActivities;
