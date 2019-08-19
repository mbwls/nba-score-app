const express = require('express');
const router = express.Router();
const BallDontLieAPIController = require('../controllers/balldontlie-api.controller');

router.get('/getDailyScores', BallDontLieAPIController.getDailyScores);

module.exports = router;
