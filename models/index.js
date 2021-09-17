const Project = require('./Project');
const Collaborator = require('./Collaborator');
const ProjectCollaborator = require('./ProjectCollaborator');

Project.belongsToMany(
    Collaborator,
    {
        through: ProjectCollaborator,
        as: 'collaborators'
    }
);

Collaborator.belongsToMany(
    Project,
    {
        through: ProjectCollaborator,
        as: 'projects'
    }
);

module.exports = { Project, Collaborator, ProjectCollaborator };
