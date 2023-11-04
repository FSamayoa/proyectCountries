const express = require("express");
const server = express();
const cors = require ("cors")

server.use(cors());

const corsOptions = {
    origin: "http://localhost:3001", // Reemplaza con la URL de tu frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  
 

const countryRoutes = require("./routes/countryRoutes");
const activityRoutes = require("./routes/activityRoutes");
server.use(express.json()); 
server.use("/", countryRoutes);
server.use("/", activityRoutes);



module.exports = server;
