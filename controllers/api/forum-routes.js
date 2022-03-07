 const router = require('express').Router();
const { Forum } = require('../../models');


// GET /api/users
router.get('/api', (req, res) => {
  
});

// GET /api/users/1
router.get('/:id', (req, res) => {});

// POST /api/users
router.post('/',async (req, res) => {
    console.log(req.body)
    const pet =await Forum.create({
        Pet_Name:req.body.petName,
        Breed_type:req.body.breedType,
        gender:req.body.gender,
        allergies:req.body.allergies,
        aggressive:req.body.aggressive,
        grooming_needs:req.body.grooming


    })
    console.log(pet)
    res.json({data:"hello"})
});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});
module.exports=router