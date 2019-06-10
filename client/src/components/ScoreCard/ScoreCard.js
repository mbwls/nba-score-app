import React from 'react';
import './ScoreCard.css';

const ScoreCard = props => {
    return (
        <div className='score-card'>
            <div className='team-info away'>
                <span className='team-name'>Atlanta Hawks</span>
                <div className='icon-wrapper'>
                    <img alt='home-logo' width={25} height={25} src={require('../../config/resources/atlanta-hawks.svg')} />
                </div>
            </div>

            <div className='game-score'>
                <span>109 - 86</span>
                <br />
                <span className='game-time'>Final</span>
            </div>

            <div className='team-info home'>
                <div className='icon-wrapper'>
                    <img alt='home-logo' width={25} height={25} src={require('../../config/resources/boston-celtics.svg')} />
                </div>
                <span className='team-name'>Boston Celtics</span>
            </div>
        </div>
    );
};

export default ScoreCard;
