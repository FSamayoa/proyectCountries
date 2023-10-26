const server = require("./src/server");
const db = require("./src/db")
const { loadDataFromJson } = require('./src/utils/dataLoader');


db.database.sync({ force: true }).then(() => {
    loadDataFromJson();
    server.listen("3001", () => {
        console.log("listen on port, 3001")

    })


});