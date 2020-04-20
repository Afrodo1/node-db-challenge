const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);

module.exports = server;