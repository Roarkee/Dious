const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");


const Team = sequelize.define('Team', {
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
        type: DataTypes.TEXT,
    }
});


module.exports = Team;