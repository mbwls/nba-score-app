const axios = require('axios');
const moment = require('moment');

const getDailyScoresRS = async date => {
    let season =
        moment(date).month() > 5
            ? moment(date).year()
            : moment(date).year() - 1;

    try {
        return await axios({
            url: `https://api.mysportsfeeds.com/v2.0/pull/nba/${season}-${season +
                1}-regular/date/${date}/games.json`,
            method: 'get',
            headers: {
                Authorization: `Basic ${process.env.API_TOKEN}`
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const getGameDataRS = async (gameID, date) => {
    let season =
        moment(date).month() > 5
            ? moment(date).year()
            : moment(date).year() - 1;

    try {
        return await axios({
            url: `https://api.mysportsfeeds.com/v2.0/pull/nba/${season}-${season +
                1}-regular/games/${gameID}/boxscore.json`,
            method: 'get',
            headers: {
                Authorization: `Basic ${process.env.API_TOKEN}`
            }
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getDailyScoresRS,
    getGameDataRS
};
