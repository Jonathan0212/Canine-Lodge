const router = require('express').Router();
const { Forum, Appointment } = require('../../models');


// GET /api/users
router.get('/api', (req, res) => {

});

// GET /api/users/1
router.get('/', (req, res) => {
    
    console.log("here")
    Forum.findAll({attributes:["id","pet_Name"]}).then(dbData => { 
        console.log(dbData)
        res.json(dbData) 
    }).catch(e => { console.log(e) })
    // res.json({ data: "success" })
});

// POST /api/users
router.post('/', async (req, res) => {
    console.log(req.body)
    const pet = await Forum.create({
        Pet_Name: req.body.petName,
        Breed_type: req.body.breedType,
        gender: req.body.gender,
        allergies: req.body.allergies,
        aggressive: req.body.aggressive,
        grooming_needs: req.body.grooming


    })
    console.log(pet)
    res.json({ data: "hello" })
});
router.get('/schedule', (req, res) => {
    
    console.log("here")
    Appointment.findAll({attributes:["dog_id","start_time","end_time"]}).then(dbData => { 
        console.log(dbData)
        res.json(dbData) 
    }).catch(e => { console.log(e) })
    // res.json({ data: "success" })
});
// PUT /api/users/1
router.post('/schedule', async (req, res) => { 
    console.log(req.body)
    const a= await Appointment.create({
        dog_id:req.body.id,
        start_time:req.body.start,
        end_time:req.body.end
    })
    res.json({data:"success"})
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => { });
module.exports = router