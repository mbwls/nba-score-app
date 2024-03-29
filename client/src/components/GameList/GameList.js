import React, { useState } from 'react';
import ScoreCard from '../ScoreCard/ScoreCard';
import './GameList.css';

const GameList = props => {
    const [loadedRefData, setLoadedRefData] = useState(false);
    if (!loadedRefData && Object.keys(props.referenceData).length > 0)
        setLoadedRefData(true);

    return loadedRefData ? (
        <div className='game-list'>
            {props.scoresData.map(g => {
                return (
                    <ScoreCard
                        {...props}
                        key={g.id}
                        gameData={g}
                    />
                );
            })}
        </div>
    ) : null;
};

export default GameList;
