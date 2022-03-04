const router = require('express').Router();
// const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    // const dbGalleryData = await Gallery.findAll({
    //   include: [
    //     {
    //       model: Painting,
    //       attributes: ['filename', 'description'],
    //     },
    //   ],
    // });

    // const galleries = dbGalleryData.map((gallery) =>
    //   gallery.get({ plain: true })
    // );

    res.render('homepage', {
    //   galleries,
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
  router.get('/schedule', async (req, res) => {
    try {
      
      res.render('schedule', {
     
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;