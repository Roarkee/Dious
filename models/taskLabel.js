const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); // Adjust to your Sequelize instance
const Task = require('./tasks');
const Label = require('./label');



const TaskLabel = sequelize.define('TaskLabel', {
  taskId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Task,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  labelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Label,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'TaskLabels',
  timestamps: true, // Tracks createdAt and updatedAt automatically
  indexes: [
    {
      unique: true,
      fields: ['taskId', 'labelId'], // Enforces uniqueness for task-label pairs
    },
  ],
});

module.exports = TaskLabel;
