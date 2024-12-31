const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require('./Users');


const ActivityLog = sequelize.define( 'ActivityLog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    targetEntity: {
        type: DataTypes.STRING,
        allowNull: false,
        // Example target entities: 'task', 'project', 'comment'
    },
      entityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // The ID of the entity being acted upon (e.g., task ID, project ID)
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },    
      

});



module.exports = ActivityLog;