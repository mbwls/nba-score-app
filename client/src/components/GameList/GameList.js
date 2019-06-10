import React from 'react';
import ScoreCard from '../ScoreCard/ScoreCard';
import './GameList.css';

const GameList = props => {
    return (
        <div className='game-list'>
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
        </div>
    );
};

export default GameList;
