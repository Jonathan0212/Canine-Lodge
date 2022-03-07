const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = [
    {
        email:'petco@pet.co',
        password: 'password1234'

    },
    {
        email:'petsmart@petsmart.com',
        password: 'password1234'

    },
    {
        email:'wooflodge@woof.com',
        password: 'password1234'

    },
    {
        email:'petcare@petcare.com',
        password: 'password1234'

    },
    {
        email:'petsupplies@petsupplies.com',
        password: 'password1234'

    },
    {
        email:'WoofHotel@woofhotel.com',
        password: 'password1234'

    }
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;