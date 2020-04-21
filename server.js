const express = require('express');
const helmet = require('helmet');


const server = express();


const projectRouter = require('./projects/projects-router');
const resourceRouter = require('./resources/resource-router');



server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources',resourceRouter);

module.exports = server;
