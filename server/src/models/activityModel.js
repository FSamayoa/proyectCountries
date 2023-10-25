const { DataTypes } = require("sequelize");

module.exports = (database) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
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