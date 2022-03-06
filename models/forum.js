const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Forum extends Model {}

Forum.init(
    {
    // Pet ID Column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },  
     // Pet name column
        Pet_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
                    },
    // Pet Breed Column
        Breed_type: {
            type: DataTypes.STRING,
            allowNull: false,
                    },
    // Pet Gender column
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            } 
         },
     // Pet allergies column
        allergies: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
    // Pet aggressive Y/N
        aggressive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
    // Pet grooming Y/N
        grooming_needs: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    // UNIQUE forum ID
         forum_id: {
            type: DataTypes.INTEGER,
             references: {
                model: 'forum',
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