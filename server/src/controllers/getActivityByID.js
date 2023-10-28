const { Activity, Country } = require("../db");

const getActivityById = async (activityId) => {
    try {
        const activity = await Activity.findOne({ where: { id: activityId }, 
            include: [
                {
                    model: Country,
                    attributes: ["nombre"],
                },
            ],
        });

        if (!activity) {
            throw new Error("No se encontró la actividad con el ID proporcionado");
        }

        return activity;
    } catch (error) {
        throw new Error("Error al obtener la actividad por ID: " + error.message);
    }
};

module.exports = {
    getActivityById,
};
