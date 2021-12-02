const express= require('express');

const routes = require("./routes");

// const { logger } = require("./middleware/middleware");

const server = express();

server.use(express.json());

// server.use(logger);

server.use("/api/users", routes);

module.exports = server;