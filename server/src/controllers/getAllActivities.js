const { Activity, Country } = require("../db");

const getAllActivities = async () => {
    try {
        const activities = await Activity.findAll({
            include: [
                {
                    model: Country,
                    attributes: ["nombre"],
                },
            ],
        });
        return activities;
    } catch (error) {
        throw new Error("Error al obtener actividades");
    }
};

module.exports = {
    getAllActivities,
};