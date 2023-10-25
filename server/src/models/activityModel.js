const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define('Activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            
        },
        activityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        temporada: {
            type: DataTypes.ENUM("Primavera", "Verano", "Otoño", "Invierno"),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
};