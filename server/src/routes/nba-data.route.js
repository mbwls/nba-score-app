const express = require('express');
const router = express.Router();
const NBADataController = require('../controllers/nba-data.controller');

router.get('/getDailyScoresRS', NBADataController.getDailyScoresRS);

module.exports = router;
