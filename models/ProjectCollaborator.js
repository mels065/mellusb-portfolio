const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProjectCollaborator extends Model {}

ProjectCollaborator.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'project',
                key: 'id'
            }
        },
        collaborator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'collaborator',
                key: 'collaborator'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project_collaborator'
    }
);

module.exports = ProjectCollaborator;
