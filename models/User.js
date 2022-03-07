const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')
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
hooks: {
    // set up beforeCreate lifecycle "hook" functionality
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },

    async beforeUpdate(updatedUserData) {
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      return updatedUserData;
    }
},
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    } 
);
// (async () => {
//     await sequelize.sync();
//     const jane = await User.create({
//       email: "janedoe2@aol.com",
//       password: "12345678",
//     });
//     console.log(jane.toJSON());
//   })();
module.exports = User;