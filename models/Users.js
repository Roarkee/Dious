const { DataTypes } = require("sequelize")
const {sequelize} = require('../config/db')

const User = sequelize.define('User', {
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,

    },
    lastName: {
        type: DataTypes.STRING,

    }, 
    role: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['admin', 'project manager', 'team member', 'guest', 'viewer']]
        },
        allowNull: false,
        defaultValue: 'viewer'
    },   
   
},
{
    timestamps: true,
    tableName: 'Users',
},
)

module.exports = User;