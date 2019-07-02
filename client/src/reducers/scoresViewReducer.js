import moment from 'moment';
import { actionTypes } from '../actions/scoresViewAction';

const initialState = {
    dateKey: moment(),
    scoresData: {},
    referenceData: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setScoresDate:
            return { ...state, dateKey: action.payload };
        default:
            return state;
    }
};
