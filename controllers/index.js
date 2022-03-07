const router = require('express').Router();


const routes = require('./home-routes.js');
const userRoutes  = require('./api/user-routes');
const forumRoutes = require('./api/forum-routes');




router.use('/',routes);
router.use('/api/user',userRoutes);
router.use('/api/forum', forumRoutes);
// hasOne((User));

module.exports = router;