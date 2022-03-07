const sequelize = require('../config/connection');
const {Forum} = require('../models')


// Since Allergies,Aggresive, and grooming fields of the table are BOOLEAN values of 0 = true 1= false
// Gender field column is set to only use one letter M or F

const forumData = [
    {
        Pet_Name: 'Tex',
        Breed_type: 'Pitbull',
        gender:'M',
        allergies:'1',
        aggressive:'0',
        grooming_needs:'0',

    },
    {
        Pet_Name: 'Vader',
        Breed_type: 'Pitbull mixed',
        gender:'M',
        allergies:'1',
        aggressive:'0',
        grooming_needs:'0',

    },
    {
        Pet_Name: 'Chewy',
        Breed_type: 'Poodle',
        gender:'M',
        allergies:'0',
        aggressive:'0',
        grooming_needs:'1',

    },
    {
        Pet_Name: 'Lola',
        Breed_type: 'Husky',
        gender:'F',
        allergies:'0',
        aggressive:'0',
        grooming_needs:'1',

    },
    {
        Pet_Name: 'Teddy',
        Breed_type: 'Golden Doodle',
        gender:'M',
        allergies:'1',
        aggressive:'0',
        grooming_needs:'1',

    },
    {
        Pet_Name: 'Zeus',
        Breed_type: 'German Shepard',
        gender:'M',
        allergies:'1',
        aggressive:'1',
        grooming_needs:'1',

    },
];

const seedForum = () => Forum.bulkCreate(forumData);
module.exports = seedForum;