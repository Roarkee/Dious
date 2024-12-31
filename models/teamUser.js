const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require('./Users');
const Team = require('./team')

const TeamMember = sequelize.define('TeamMember', {
    teamId: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Part of composite primary key
      allowNull: false,
      references: {
        model: Team,
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Part of composite primary key
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'member',
    },
  }, {
    tableName: 'Team Members',
    timestamps: true,
  });
  
  module.exports = TeamMember;
  