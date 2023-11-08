const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define('Country', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,

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
            allowNull: true,
        },
        maps: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timezone: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
};
