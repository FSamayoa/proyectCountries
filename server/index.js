const server = require("./src/server");
const db = require("./src/db")

db.database.sync({ force: true }).then(() => {
    server.listen("3001", () => {
        console.log("listen on port, 3001")

    })


});