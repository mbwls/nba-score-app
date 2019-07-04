import React from 'react';
import './DetailsHeader.css';

const DetailsHeader = props => {
    return (
        <div className='details-header'>
            <div className='header-logo'>
                <img
                    src='https://www.nba.com/assets/logos/teams/primary/web/DAL.svg'
                    width='160'
                    height='120'
                    alt='away-team-header'
                />
                <div className='header-team-name'>Dallas Mavericks</div>
            </div>
            <div className='header-score'>
                91 - 84
            </div>
            <div className='header-logo'>
                <img
                    src='https://www.nba.com/assets/logos/teams/primary/web/WAS.svg'
                    width='160'
                    height='120'
                    alt='home-team-header'
                />
                <div className='header-team-name'>Washington Wizards</div>
            </div>
        </div>
    );
};

export default DetailsHeader;
