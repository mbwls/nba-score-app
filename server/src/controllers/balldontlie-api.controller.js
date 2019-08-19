const { errorResponse, successResponse } = require('../services/util.service');
const BallDontLieAPIService = require('../services/balldontlie-api.service');

const getDailyScores = async (req, res) => {
    let result = await BallDontLieAPIService.getDailyScores(req.query.date);
    return result.data
        ? successResponse(res, { data: result.data })
        : errorResponse(res, result);
};

module.exports = {
    getDailyScores
};
