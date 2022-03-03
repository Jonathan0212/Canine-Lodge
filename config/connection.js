const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "pets_db",
  "root",
  "Rowan40!",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;