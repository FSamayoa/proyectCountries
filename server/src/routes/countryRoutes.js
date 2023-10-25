const express = require("express");
const server = require("../server");


server.get("/",(req,res)=>{
    res.send("ok")
})

module.exports = server;