const Project = require('./Project');
const Collaborator = require('./Collaborator');
const ProjectCollaborator = require('./ProjectCollaborator');

Project.belongsToMany(
    Collaborator,
    {
        through: ProjectCollaborator,
        as: 'projects'
    }
);

Collaborator.belongsToMany(
    Project,
    {
        through: ProjectCollaborator,
        as: 'collaborators'
    }
);

module.exports = { Project, Collaborator, ProjectCollaborator };
