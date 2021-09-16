const Project = require('../../models/Project');

const projectRouter = require('express').Router();

projectRouter.get('/any-showcase', async (req, res) => {
    try {
        const isShowcase = (
            await Project.findOne({ where: { is_showcase: true } })
        ) ? true : false;
        res.json({ isShowcase });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = projectRouter;
