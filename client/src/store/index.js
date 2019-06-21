import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import * as ScoresView from '../reducers/scoresViewReducer';

const configureStore = () => {
    // ALL REDUCERS FOR APP
    const reducers = {
        scoresView: ScoresView.reducer
    };

    // LOGGER FOR DEV PURPOSES
    const middleware = [thunk, logger];

    // In development, use the browser's Redux dev tools extension if installe
    const enhancers = [];

    if (typeof window !== 'undefined' && window.devToolsExtension)
        enhancers.push(window.devToolsExtension());

    const rootReducer = combineReducers({
        ...reducers
    });

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );

    return store;
};

export default configureStore;
