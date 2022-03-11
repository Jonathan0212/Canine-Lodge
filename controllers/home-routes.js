const router = require('express').Router();
const sequelize = require('../config/connection');
// const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/petinfo', async (req, res) => {
    try {
      
      res.render('petinfo', {
     
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  router.get('/calendar', async (req, res) => {
    try {
      
      res.render('schedule', {
     
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;