const { errorResponse, successResponse } = require('../services/util.service');
const NBADataService = require('../services/nba-data.service');

const getDailyScores = async (req, res) => {
    let result = await NBADataService.getDailyScores();
    return result.data
        ? successResponse(res, { data: result.data })
        : errorResponse(res, result);
};

module.exports = {
    getDailyScores
};
