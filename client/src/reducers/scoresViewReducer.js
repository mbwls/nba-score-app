import moment from 'moment';
import { actionTypes } from '../actions/scoresViewAction';

const initialState = {
    // set to mid-2018/19 season if current date is before start of 2019/20 season for demonstration purposes
    dateKey: moment().isBefore(moment('20191023')) ? moment('20190306') : moment().subtract(1, 'days').startOf('day'),
    scoresData: [],
    referenceData: [],
    selectedGame: {},
    gameData: {},
    teamColours: {
        'ATL': '#E03A3E',
        'BOS': '#007A33',
        'BKN': '#000000',
        'CHA': '#1D1160',
        'CHI': '#CE1141',
        'CLE': '#6F263D',
        'DAL': '#00538C',
        'DEN': '#0E2240',
        'DET': '#C8102E',
        'GSW': '#1D428A',
        'HOU': '#CE1141',
        'IND': '#002D62',
        'LAC': '#C8102E',
        'LAL': '#552583',
        'MEM': '#5D76A9',
        'MIA': '#98002E',
        'MIL': '#00471B',
        'MIN': '#0C2340',
        'NOP': '#0C2340',
        'NYK': '#006BB6',
        'OKC': '#007AC1',
        'ORL': '#0077C0',
        'PHI': '#006BB6',
        'PHX': '#1D1160',
        'POR': '#E03A3E',
        'SAC': '#5A2D81',
        'SAS': '#C4CED4',
        'TOR': '#CE1141',
        'UTA': '#002B5C',
        'WAS': '#002B5C'
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setScoresDate:
            return { ...state, dateKey: action.payload };
        case actionTypes.requestDailyScores:
            return { ...state, scoresData: action.payload };
        case actionTypes.setReferenceData:
            return { ...state, referenceData: action.payload };
        case actionTypes.setSelectedGame:
            return { ...state, selectedGame: action.payload };
        case actionTypes.setGameData:
            return { ...state, gameData: action.payload };
        default:
            return state;
    }
};
