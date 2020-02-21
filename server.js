const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/router.js");
const resourcesRouter = require("./resources/router.js");
const tasksRouter = require("./tasks/router.js");

const server = express();

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

server.use(helmet());
server.use(express.json());



module.exports = server;