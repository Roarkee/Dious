const { DataTypes } =require( 'sequelize' );
const {sequelize} = require('../config/db');
const Project = require('./projects')
const User = require('./Users')


const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // auto-incrementing primary key
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,

    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'not started',
        status: DataTypes.ENUM('Not Started', 'Started', 'Completed'),
     

    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        allowNull: false,
        
    },
    due_date: {
        type: DataTypes.DATE
    },
    projectId:{
        type: DataTypes.INTEGER,
        references:{
            model: Project,
            key: 'id',
        },
        onDelete: 'CASCADE'

    },

    assigned_to: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        onDelete: 'SET NULL',
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }

}, {
    tableName: 'Tasks',
    timestamps: false,
}
)

module.exports = Task;