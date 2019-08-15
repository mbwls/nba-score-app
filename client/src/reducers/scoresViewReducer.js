import moment from 'moment';
import { actionTypes } from '../actions/scoresViewAction';

const initialState = {
    dateKey: moment('20190306'),
    scoresData: [],
    referenceData: [],
    selectedGame: {},
    gameData: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setScoresDate:
            return { ...state, dateKey: action.payload };
        case actionTypes.requestDailyScores:
            return { ...state, scoresData: action.payload };
        case actionTypes.updateDailyReferenceData:
            return { ...state, referenceData: action.payload };
        case actionTypes.setSelectedGame:
            return { ...state, selectedGame: action.payload };
        case actionTypes.setGameData:
            return { ...state, gameData: action.payload };
        default:
            return state;
    }
};
