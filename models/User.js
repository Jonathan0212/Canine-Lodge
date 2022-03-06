const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

//define table columns and configuration
User.init(
{
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },  
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
// definingp password column
    password: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
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