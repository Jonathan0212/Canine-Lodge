const router = require('express').Router();


const routes = require('./home-routes.js');
const userRoutes  = require('./api/user-routes');
router.use('/',routes);
router.use('/api/user',userRoutes);
module.exports = router;