const express = require('express');

const projectRouter = require('./project-routes');

const apiRouter = express.Router();

apiRouter.use('/project', projectRouter);

module.exports = apiRouter;
