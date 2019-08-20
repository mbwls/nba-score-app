const express = require('express');
const router = express.Router();
const BallDontLieAPIController = require('../controllers/balldontlie-api.controller');

router.get('/getDailyScores', BallDontLieAPIController.getDailyScores);
router.get('/getReferenceData', BallDontLieAPIController.getReferenceData);
router.get('/getGameData', BallDontLieAPIController.getGameData);

module.exports = router;
