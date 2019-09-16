import React from 'react';
import './GameDetails.css';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import TeamStats from './TeamStats/TeamStats';

const GameDetails = props => {
    return (
        <div className='game-details'>
            <DetailsHeader {...props} />
            {/* <BoxScore {...props} /> */}
            <TeamStats {...props} />
        </div>
    );
};

export default GameDetails;
