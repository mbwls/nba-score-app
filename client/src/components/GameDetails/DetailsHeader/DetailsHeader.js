import React from 'react';
import './DetailsHeader.css';

const DetailsHeader = props => {
    return (
        <div className='details-header'>
            <div className='team-info'>
                <div className='icon-wrapper'>
                    <img
                        src='https://www.nba.com/assets/logos/teams/primary/web/MIN.svg'
                        width='80'
                        height='80'
                        alt='away-team-header'
                    />
                </div>
                <div className='team-name'>Minnesota Timberwolves</div>
                <div className='team-score'>91</div>
            </div>
            <div className='team-info'>
                <div className='icon-wrapper'>
                    <img
                        src='https://www.nba.com/assets/logos/teams/primary/web/OKC.svg'
                        width='80'
                        height='80'
                        alt='away-team-header'
                    />
                </div>
                <div className='team-name'>Oklahoma City Thunder</div>
                <div className='team-score'><strong>123</strong></div>
            </div>
        </div>
    );
};

export default DetailsHeader;
