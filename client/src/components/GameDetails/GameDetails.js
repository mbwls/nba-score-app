import React from 'react';
import './GameDetails.css';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import TeamStats from './TeamStats/TeamStats';

const GameDetails = props => {
    return (
        <div className='game-details'>
            <button
                className='close-details'
                onClick={() =>
                    props.setSelectedGame({})
                }
            />
            <DetailsHeader {...props} />
            {/* <BoxScore {...props} /> */}
            <TeamStats {...props} />
        </div>
    );
};

export default GameDetails;
