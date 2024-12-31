const {DataTypes} = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./Users');
const Team = require('./team')

const Project = sequelize.define('Projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // auto-incrementing primary key
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: { 
        type: DataTypes.STRING,
    },
    start_at: {
        type: DataTypes.DATEONLY,
    },
    end_at: {
        type: DataTypes.DATEONLY,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isIn:[['active', 'inactive', 'completed','suspended']]
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    update_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    ownerId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
    onDelete: 'SET NULL', },
    teamId: {
        type: DataTypes.INTEGER,
        references: {
            model: Team,
            key:'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    } 

},
{
    tableName: 'Projects',
}
);


module.exports = Project;