const router = require('express').Router();

const MeetUp = require('./MeetUp');

//any path with /api/meetup should use the routes in MeetUp
router.use('/meetup', MeetUp);

router.get('/', (req, res) => {
    res.status(500).json({
        msg: 'not found',
        code: 500
    });
});

module.exports = router;
