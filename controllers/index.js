const router = require('express').Router();

const routes = require('./routes.js');

router.use('/',routes);

module.exports = router;