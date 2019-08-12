const router = require('express').Router();

const apiRoutes = require('./api');

// any request with /api should use routes in apiRoutes
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  //if they are seeing this msg, path works. I don't want anyone else to access the backend, only the app.
  res.status(500).json({
    msg: 'path not found',
    code: 500
  });
});

module.exports = router;
