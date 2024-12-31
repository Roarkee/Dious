const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db')
const Tasks =require('./tasks')
const Users =require('./Users')

const Comment = sequelize.define('Comments', {
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        },
        onDelete: 'CASCADE'
        
    },
    taskId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tasks,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
},{
    timestamps: false,
    tableName: 'Comments'
}

);


module.exports = Comment;
