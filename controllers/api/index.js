const express = require('express');

const projectRouter = require('./project-routes');
const downloadRouter = require('./download-routes.js');

const apiRouter = express.Router();

apiRouter.use('/project', projectRouter);
apiRouter.use('/download', downloadRouter);

console.log(apiRouter);

module.exports = apiRouter;
