const { errorResponse, successResponse } = require('../services/util.service');
const NBADataService = require('../services/nba-data.service');

const getDailyScoresRS = async (req, res) => {
    console.log(req);
    let result = await NBADataService.getDailyScoresRS(req.body.date);
    return result.data
        ? successResponse(res, { data: result.data })
        : errorResponse(res, result);
};

module.exports = {
    getDailyScoresRS
};
