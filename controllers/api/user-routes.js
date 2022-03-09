const router = require('express').Router();
const bcrypt = require('bcrypt')
const { User } = require('../../models');


router.post('/login', async (req,res) => {
  try{
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  if(!user){
    res.status(400).json({ messgae: 'No user found'})
    return
  }
  res.json({user})
}
catch(err){
  res.status(400).json({
    message:'User login failed'
  })
}
})





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
router.post('/',async (req, res) => {
    console.log("here")
    console.log(req.body)
    const pwdHash = await bcrypt.hash("12345678", 10);
    console.log(pwdHash)
    User.findAll({
        where: {
          email: req.body.username,
        //     password: pwdHash,
        },
      })
        .then((data) => {
        //   console.log("user data", data);
          if (data.length>0){
              const user= data[0].dataValues
              const pwd = user.password;
        bcrypt.compare(req.body.password, pwd, function (err, result) {
          if (result) {
            res.json({ id: user.id });
          } else {
            res.json({ id: null });
          }
        });
      

          }else{
            res.json({ id: null });  
          }
        })
        .catch((e) => {
          console.log("err", e);
        });
     
});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;