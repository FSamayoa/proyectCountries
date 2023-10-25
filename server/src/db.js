require("dotenv").config()
const { Sequelize } = require("sequelize");
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const activityModel = require("./models/activityModel")
const countryModel = require("./models/countryModel")



const database = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);


activityModel(database)
countryModel(database)


const {Country, Activity} = database.models

Country.belongsToMany(Activity,{through: 'CountryActivity'});
Activity.belongsToMany(Country,{through: 'CountryActivity'});


module.exports = {
    ...database.models,
    database,
};