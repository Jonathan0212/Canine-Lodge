const seedUser = require('./user-seeds');
const seedForum = require('./forum-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USERS SEEDED ----- \n');
    await seedForum();
    console.log('\n----- FORUM SEEDED -----\n');
    process.exit(0);
};

seedAll();