const router = require('express').Router();

const api = require('./api');
// const homeRoutes = require('./homepage');
// const dashboardRoutes = require('./dashboardRoutes');

// router.use('/', homeRoutes);
router.use('/api/', api);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
