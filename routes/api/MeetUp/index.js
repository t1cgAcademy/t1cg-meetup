const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({
    msg: 'Hello! This is from /api/meetup!'
  });
});

module.exports = router;
