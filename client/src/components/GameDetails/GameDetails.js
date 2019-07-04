import React from 'react';
import './GameDetails.css';
import DetailsHeader from './DetailsHeader/DetailsHeader';

const GameDetails = props => {
    return (
        <div className='game-details'>
            <DetailsHeader {...props} />
        </div>
    );
};

export default GameDetails;
