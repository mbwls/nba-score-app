import { actionTypes } from '../actions/scoresViewAction';

const initialState = {
    dateKey: '',
    scoresData: {},
    referenceData: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
