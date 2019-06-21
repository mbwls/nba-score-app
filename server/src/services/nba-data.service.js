const axios = require('axios');

const getDailyScores = async () => {
    try {
        return await axios({
            url:
                'https://api.mysportsfeeds.com/v2.0/pull/nba/2018-2019-regular/date/20190323/games.json',
            method: 'get',
            headers: {
                Authorization:
                    `Basic ${process.env.AUTH_KEY}`
            }
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getDailyScores
};
