const express = require("express");
const server = express();


const countryRoutes = require("./routes/countryRoutes");
const activityRoutes = require("./routes/activityRoutes");
server.use(express.json()); 
server.use("/", countryRoutes);
server.use("/", activityRoutes);



module.exports = server;
