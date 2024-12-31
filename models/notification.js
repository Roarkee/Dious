const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); // Adjust to your Sequelize instance
const User = require('./Users');


const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // auto-incrementing primary key
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    // Example types: 'task_assigned', 'commented', 'status_changed'
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    // Brief description of the notification
  },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Whether the user has read the notification
    validate: {
      isIn: [[true, false]],
    },
  },
  referenceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // This could reference a specific task, comment, etc., depending on the type
  },
  referenceType: {
    type: DataTypes.STRING,
    allowNull: true,

  }
}, {
  tableName: 'Notifications',
  timestamps: true, // Tracks createdAt and updatedAt automatically
});

module.exports = Notification;
