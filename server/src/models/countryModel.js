const { DataTypes } = require("sequelize");

module.exports = (database) => {
    sequelize.define('Country', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poblacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        maps: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timezone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activities: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
};
