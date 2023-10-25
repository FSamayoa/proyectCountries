const express = require("express");
const server = express();

const countryRoutes = require("./routes/countryRoutes");

server.use("/", countryRoutes);



module.exports = server;
