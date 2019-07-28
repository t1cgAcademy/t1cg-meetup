const router = require('express').Router();

const MeetUp = require('./MeetUp');

//any path with /api/meetup should use the routes in MeetUp
router.use('/meetup', MeetUp);

module.exports = router;
