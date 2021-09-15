const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        repo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (!/\w+(-\w+)*/.test(value)) {
                        throw new Error("repo must be in this format: `string-string`");
                    }
                }
            }
        },
        has_screenshot: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;
