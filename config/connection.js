const Sequelize = require('sequelize');

require('dotenv').config();
 //const sequelize = new Sequelize(
  // "pets_db",
   //"root",
  // "Car",
//    {
//      host: 'localhost',
//     dialect: 'mysql',
//      port: 3306,
//    }
// );
 // create connection to our db
const sequelize = process.env.JAWSDB_URL
   ? new Sequelize(process.env.JAWSDB_URL)
   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
       host: 'localhost',
      dialect: 'mysql',
       port: 3306
      });
// const sequelize = new Sequelize("PETS", "admin", process.env.DB_PWD, {
//   host: process.env.DB_HOST,
//   dialect: "mysql",
//   port: 3306,
// });
module.exports = sequelize;
