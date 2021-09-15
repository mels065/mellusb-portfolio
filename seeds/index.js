const sequelize = require('../config/connection');

const { Project, Collaborator, ProjectCollaborator } = require('../models');

const projects = require('./Project.json');
const collaborators = require('./Collaborator.json');
const projectCollaborators = require('./ProjectCollaborator.json');

async function seedDatabase() {
    try {
        await sequelize.sync({ force: true });

        await Project.bulkCreate(projects);
        await Collaborator.bulkCreate(collaborators);
        await ProjectCollaborator.bulkCreate(projectCollaborators);

        process.exit(0);
    } catch (err) {
        console.error(err);
    }
}

seedDatabase();
