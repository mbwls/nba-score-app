import React, { useState } from 'react';
import './GameDetails.css';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import TeamStats from './TeamStats/TeamStats';

const GameDetails = props => {
    /* START HOOKS */
    const [loadedStats, setLoadedStats] = useState(false);
    if (!loadedStats && props.gameData.home !== undefined && props.gameData.away !== undefined)
        setLoadedStats(true);
    /* END HOOKS */

    return loadedStats ? (
        <div className='game-details'>
            <button
                className='close-details'
                onClick={() =>
                    props.setSelectedGame({})
                }
            />
            <DetailsHeader {...props} />
            {props.gameData.home.players.length > 0 ? <TeamStats {...props} /> : null}
        </div>
    ) : null;
};

export default GameDetails;
