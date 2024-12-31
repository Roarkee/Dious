const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');
const User = require('./Users');


const FileAttachment = sequelize.define('FileAttachment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Auto-incrementing primary key
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
  entityType: {
    type: DataTypes.STRING,
    allowNull: false,
    // To identify whether the attachment is for a task, project, etc.
    // Examples: 'task', 'project', 'comment'
  },
  entityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // ID of the specific task, project, or comment the file is attached to
  },
  file_name: {
    type: DataTypes.STRING,
    allowNull: false,
    // The original name of the uploaded file
  },
  file_url: {
    type: DataTypes.STRING,
    allowNull: false,
    // URL or path to the stored file (e.g., AWS S3 URL or local file path)
  },
  file_type: {
    type: DataTypes.STRING,
    allowNull: true,
    // MIME type of the file, e.g., 'image/png', 'application/pdf'
  },
  file_size: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // Size of the file in bytes (optional, useful for tracking storage)
  },
  uploaded_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {

  timestamps: false, // You can use Sequelize's automatic timestamps if you prefer
});

module.exports = FileAttachment;
