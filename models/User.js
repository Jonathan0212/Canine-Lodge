const {Model, Dataypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

//define tabler columns and configuration
User.init(
{
// defining a email column
    email: {
        type: Dataypes.STRING,
        allowNull: false,
        unique: true
    },
// definingp password column
    password: {
        type:Dataypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);
