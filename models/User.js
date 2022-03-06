const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

//define table columns and configuration
User.init(
{
 //creates a unique ID
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },  
// email column
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
//  password column
    password: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);

module.exports = User;