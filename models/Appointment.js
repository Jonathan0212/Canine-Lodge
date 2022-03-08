const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class Appointment extends Model {}

//define table columns and configuration
Appointment.init(
{
 //creates a unique ID
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },  
// email column
    dog_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    start_time: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: false
    }, 
    end_time: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
},
{
hooks: {
    // set up beforeCreate lifecycle "hook" functionality
    // async beforeCreate(newUserData) {
    //   newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //   return newUserData;
    // },

    // async beforeUpdate(updatedUserData) {
    //   updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    //   return updatedUserData;
    // }
},
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Appointment'
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
module.exports = Appointment;