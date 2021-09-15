const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Collaborator extends Model {}

Collaborator.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        github_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'collaborator'
    }
);

module.exports = Collaborator;
