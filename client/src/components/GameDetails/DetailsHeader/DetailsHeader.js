import React, { useState } from 'react';
import './DetailsHeader.css';

const DetailsHeader = props => {
    /* START HOOKS */
    const [loadedGameInfo, setLoadedGameInfo] = useState(false);
    if (
        !loadedGameInfo &&
        props.selectedGame.home_team !== undefined &&
        props.selectedGame.visitor_team !== undefined
    )
        setLoadedGameInfo(true);
    /* END HOOKS */

    return loadedGameInfo ? (
        <div className='details-header'>
            <div className='team-info'>
                <div className='icon-wrapper'>
                    <img
                        src={`https://www.nba.com/assets/logos/teams/primary/web/${
                            props.selectedGame.visitor_team.abbreviation
                        }.svg`}
                        width='80'
                        height='80'
                        alt='away-team-header'
                    />
                </div>
                <div className='team-name'>
                    {props.selectedGame.visitor_team.full_name}
                </div>
                <div
                    className={`team-score ${
                        props.selectedGame.home_team_score <
                        props.selectedGame.visitor_team_score
                            ? 'bold'
                            : ''
                    }`}
                >
                    {props.selectedGame.visitor_team_score}
                </div>
            </div>
            <div className='team-info'>
                <div className='icon-wrapper'>
                    <img
                        src={`https://www.nba.com/assets/logos/teams/primary/web/${
                            props.selectedGame.home_team.abbreviation
                        }.svg`}
                        width='80'
                        height='80'
                        alt='away-team-header'
                    />
                </div>
                <div className='team-name'>
                    {props.selectedGame.home_team.full_name}
                </div>
                <div
                    className={`team-score ${
                        props.selectedGame.home_team_score >
                        props.selectedGame.visitor_team_score
                            ? 'bold'
                            : ''
                    }`}
                >
                    {props.selectedGame.home_team_score}
                </div>
            </div>
        </div>
    ) : null;
};

export default DetailsHeader;
