const server = require("./src/server");
const db = require("./src/db")
const { loadDataFromJson } = require('./src/utils/dataLoader');


db.database.sync().then(() => {
    // loadDataFromJson();  comentado pues ya se ingresaron los datos a la bd

   
    server.listen("3001", () => {
        console.log("listen on port, 3001")

    })
});

