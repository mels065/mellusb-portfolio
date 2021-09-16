const express = require('express');

const { Project, Collaborator } = require('../models');

const apiRouter = require('./api');

const withAuth = require('../utils/with-auth');

const router = express.Router();

router.use('/api', apiRouter);

router.get('/', async (req, res) => {
    try {
        const projects = (await Project.findAll(
            {
                include: [
                    { model: Collaborator }
                ]
            }
        )).map(projectData => {
            const project = projectData.get();
            project.collaborators = project.collaborators.map(
                collaborator => collaborator.get()
            );
            return project;
        });

        res.render(
            'portfolio',
            { projects }
        );
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
