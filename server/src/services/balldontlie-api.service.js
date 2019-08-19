const axios = require('axios');

const getDailyScores = async date => {
    try {
        return await axios({
            url: `https://www.balldontlie.io/api/v1/games?start_date=${date}&end_date=${date}`,
            method: 'get'
        });
    } catch (error) {
        console.log(error);
    }
};

const getReferenceData = async () => {
    try {
        return await axios({
            url: `https://www.balldontlie.io/api/v1/teams?per_page=30`,
            method: 'get'
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getDailyScores,
    getReferenceData
};
