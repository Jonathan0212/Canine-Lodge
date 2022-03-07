const router = require('express').Router();

const { User } = require('../../models');

// GET /api/users
router.get('/api', (req, res) => {
    User.findAll({
        attributes: [
            'email',
            'password',
        ],
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/api/:id', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {
    console.log("here")
    console.log(req.body)
    res.send("hello")
});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;