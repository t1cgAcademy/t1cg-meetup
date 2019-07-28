const router = require('express').Router();

const apiRoutes = require('./api');

// any request with /api should use routes in apiRoutes
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.json({
    msg: 'path not found',
    code: 500
  });
});

module.exports = router;
