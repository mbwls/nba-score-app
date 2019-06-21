const axios = require('axios');

const getDailyScoresRS = async (date) => {
    try {
        return await axios({
            url:
                `https://api.mysportsfeeds.com/v2.0/pull/nba/2018-2019-regular/date/${date}/games.json`,
            method: 'get',
            headers: {
                Authorization:
                    `Basic ${process.env.API_TOKEN}`
            }
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getDailyScoresRS
};
