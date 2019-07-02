import { get } from '../utils//axios/axiosRequest';
import moment from 'moment';

const requestDailyScores = 'REQUEST_DAILY_SCORES';
const updateDailyReferenceData = 'UPDATE_DAILY_REFERENCE';
const setScoresDate = 'SET_SCORES_DATE';

export const actionTypes = {
    requestDailyScores,
    setScoresDate,
    updateDailyReferenceData
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
            `nba-scores/nba-data/getDailyScoresRS?date=${moment(newDate)
                .clone()
                .format('YYYYMMDD')}`
        );
        if (response.data.success) {
            dispatch({ type: setScoresDate, payload: newDate });
            dispatch({
                type: requestDailyScores,
                payload: response.data.data.games
            });
            dispatch({
                type: updateDailyReferenceData,
                payload: response.data.data.references
            });
        }
    }
};
