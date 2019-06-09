import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ScoresView from './containers/ScoresView/ScoresView';

function App() {
    return (
        <div className='App'>
            <BrowserRouter basename='nba-scores'>
                <Switch>
                    <Route exact path='/scores' component={ScoresView} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
