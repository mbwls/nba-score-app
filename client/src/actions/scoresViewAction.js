import { get, post } from '../utils//axios/axiosRequest';
import APPCONST from '../config/constants';
import moment from 'moment';

const requestDailyScoresRS = 'REQUEST_REGULAR_SEASON_DAILY_SCORES';
const setScoresDate = 'SET_SCORES_DATE';

export const actionTypes = {
    requestDailyScoresRS,
    setScoresDate
};

export const actionCreators = {
    setScoresDate: dateString => (dispatch, getState) => {
        const newDate = moment(dateString).format();
        dispatch({ type: setScoresDate, payload: newDate });
    }
};
