import React from 'react';
import './BoxScore.css';

const BoxScore = props => {
    return (
        <div className='box-score'>
            <div className='header-title'>Scoring</div>
            <div className='card-header' />
            <div className='box-flex'>
                <div className='box-teams'>
                    <div className='team-info'>
                        <div className='icon-wrapper'>
                            <img
                                src='https://www.nba.com/assets/logos/teams/primary/web/MIN.svg'
                                width='35'
                                height='35'
                                alt='away-team-header'
                            />
                        </div>
                        <div className='team-name'>MIN</div>
                    </div>
                    <div className='team-info'>
                        <div className='icon-wrapper'>
                            <img
                                src='https://www.nba.com/assets/logos/teams/primary/web/OKC.svg'
                                width='35'
                                height='35'
                                alt='away-team-header'
                            />
                        </div>
                        <div className='team-name'>OKC</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxScore;
