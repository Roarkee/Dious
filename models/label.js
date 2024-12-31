const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db'); 

const Label = sequelize.define('Label', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true, // Optional: color for the label (e.g., #FF5733)
  },
}, {
  tableName: 'Labels',
  timestamps: true,
});

module.exports = Label;
