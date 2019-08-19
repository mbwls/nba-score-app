import { get } from '../utils//axios/axiosRequest';
import moment from 'moment';

const requestDailyScores = 'REQUEST_DAILY_SCORES';
const setReferenceData = 'SET_REFERENCE_DATA';
const setScoresDate = 'SET_SCORES_DATE';
const setSelectedGame = 'SET_SELECTED_GAME';
const setGameData = 'SET_GAME_DATA';

export const actionTypes = {
    requestDailyScores,
    setScoresDate,
    setSelectedGame,
    setReferenceData,
    setGameData
};

export const actionCreators = {
    setScoresDate: dateString => async (dispatch, getState) => {
        const newDate = moment(dateString).format();

        if (
            moment(getState().scoresView.dateKey)
                .clone()
                .startOf('day')
                .isSame(
                    moment(newDate)
                        .clone()
                        .startOf('day')
                ) &&
            getState().scoresView.scoresData.length > 0
        )
            return;
            
        let response = await get(
            `nba-scores/balldontlie-api/getDailyScores?date=${moment(newDate)
                .clone()
                .format('YYYY-MM-DD')}`
        );
        if (response.data.success) {
            dispatch({ type: setScoresDate, payload: newDate });
            dispatch({
                type: requestDailyScores,
                payload: response.data.data.data
            });
        }
    },

    setReferenceData: () => async (dispatch, getState) => {
        if (getState().scoresView.referenceData.length > 0) return;
        let response = await get(`nba-scores/balldontlie-api/getReferenceData`);
        if (response.data.success) {
            dispatch({
                type: setReferenceData,
                payload: response.data.data.data
            });
        }
    },

    setSelectedGame: gameData => (dispatch, getState) => {
        dispatch({
            type: setSelectedGame,
            payload: gameData
        });
    },

    setGameData: gameID => async (dispatch, getState) => {
        let payload = {};
        let response = await get(
            `nba-scores/nba-data/getGameDataRS?date=${
                getState().scoresView.dateKey
            }&gameID=${gameID}`
        );
        if (response.data.success) {
            dispatch({
                type: setGameData,
                payload: {
                    ...payload,
                    stats: response.data.data.stats,
                    scoring: response.data.data.scoring
                }
            });
        }
    }
};
