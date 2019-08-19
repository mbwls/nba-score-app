const router = require('express').Router();
const path = require('path');

// MAIN PAGE
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
});

// INDIVIDUAL ROUTES
router.use('/nba-data', require('./nba-data.route'));
router.use('/balldontlie-api', require('./balldontlie-api.route'));

module.exports = router;
