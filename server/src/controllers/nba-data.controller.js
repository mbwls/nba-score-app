const { errorResponse, successResponse } = require('../services/util.service');
const NBADataService = require('../services/nba-data.service');

const getDailyScoresRS = async (req, res) => {
    let result = await NBADataService.getDailyScoresRS(req.query.date);
    return result.data
        ? successResponse(res, { data: result.data })
        : errorResponse(res, result);
};

const getGameDataRS = async (req, res) => {
    let result = await NBADataService.getGameDataRS(
        req.query.gameID,
        req.query.date
    );
    
    return result.data
        ? successResponse(res, { data: result.data })
        : errorResponse(res, result);
};

module.exports = {
    getDailyScoresRS,
    getGameDataRS
};
