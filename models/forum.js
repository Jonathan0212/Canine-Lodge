 const { Model, DataTypes } = require("sequelize/types");
const sequelize = require('../config/connection');

class Forum extends Model {}

Forum.init(
    {
    // Pet Forum Column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },  
        Pet_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
                    },
        Breed_type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
                    },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            } 
         },
        allergies: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
        aggressive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
        grooming_needs: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
         user_id: {
            type: Dataypes.INTEGER,
             references: {
                model: 'user',
                key: 'id'
        }
    }
},
    {   sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Forum'
    }

);
module.exports = Forum;