import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ScoresView from './containers/ScoresView/ScoresView';
import CompareView from './containers/CompareView/CompareView';


function App() {
    return (
        <div className='App'>
            <BrowserRouter basename='nba-scores'>
                <Switch>
                    <Route exact path='/scores' component={ScoresView} />
                    <Route exact path='/compare' component={CompareView} />
                    <Route component={ScoresView} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
