import moment from 'moment';
import { actionTypes } from '../actions/scoresViewAction';

const initialState = {
    dateKey: moment('20181125'),
    scoresData: [],
    referenceData: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setScoresDate:
            return { ...state, dateKey: action.payload };
        case actionTypes.requestDailyScores:
            return { ...state, scoresData: action.payload };
        case actionTypes.updateDailyReferenceData:
            return { ...state, referenceData: action.payload };
        default:
            return state;
    }
};
