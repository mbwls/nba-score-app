import React, { useState } from 'react';
import Media from 'react-media';
import _ from 'lodash';
import './ScoreCard.css';

const ScoreCard = props => {
    /* START HOOKS */
    const [loadedGameData, setLoadedGameData] = useState(false);
    if (!loadedGameData && props.gameData !== undefined)
        setLoadedGameData(true);

    const [loadedRefData, setLoadedRefData] = useState(false);
    if (!loadedRefData && props.referenceData.length > 0)
        setLoadedRefData(true);
    /* END HOOKS */

    const getTeamDataByID = teamID => {
        return _.find(props.referenceData, { id: teamID });
    };

    const homeTeamData = getTeamDataByID(props.gameData.home_team.id);
    const awayTeamData = getTeamDataByID(props.gameData.visitor_team.id);
    const homeWin =
        props.gameData.home_team_score > props.gameData.visitor_team_score;
    const gameComplete = props.gameData.status === 'Final';

    const scoreCardClick = () => {
        props.setSelectedGame(props.gameData);
        props.setGameData(props.gameData.id);
    };

    return loadedRefData && loadedGameData ? (
        <Media queries={{
            small: '(max-width: 480px)',
            medium: '(min-width: 481px) and (max-width: 820px)',
            large: '(min-width: 821px)'
        }}>
            {matches => (
                <div
                    className={`score-card${
                        props.selectedGame.id === props.gameData.id ? ' selected' : ''
                        }`}
                    onClick={() => scoreCardClick()}
                >
                    {homeTeamData && awayTeamData && props.gameData ? (
                        <React.Fragment>
                            <div className='team-info away'>
                                {matches.medium && <span
                                    className='team-name'
                                    style={!homeWin && gameComplete ? { fontWeight: 'bold' } : null}
                                >
                                    {`${awayTeamData.name}`}
                                </span>}

                                {matches.large && <span
                                    className='team-name'
                                    style={!homeWin && gameComplete ? { fontWeight: 'bold' } : null}
                                >
                                    {`${awayTeamData.city} ${awayTeamData.name}`}
                                </span>}

                                {matches.small && <div className='icon-wrapper'>
                                    <img
                                        alt='away-logo'
                                        width={70}
                                        height={70}
                                        src={`https://www.nba.com/assets/logos/teams/primary/web/${
                                            awayTeamData.abbreviation
                                            }.svg`}
                                    />
                                </div>}

                                {(matches.medium || matches.large) && <div className='icon-wrapper'>
                                    <img
                                        alt='away-logo'
                                        width={45}
                                        height={45}
                                        src={`https://www.nba.com/assets/logos/teams/primary/web/${
                                            awayTeamData.abbreviation
                                            }.svg`}
                                    />
                                </div>}
                            </div>

                            <div className='game-score'>
                                <span style={!homeWin && gameComplete ? { fontWeight: 'bold' } : null}>
                                    {props.gameData.visitor_team_score}
                                </span>
                                <span> - </span>
                                <span style={homeWin && gameComplete ? { fontWeight: 'bold' } : null}>
                                    {props.gameData.home_team_score}
                                </span>
                                <br />
                                <span className='game-time'>{props.gameData.status}</span>
                            </div>

                            <div className='team-info home'>
                                {matches.small && <div className='icon-wrapper'>
                                    <img
                                        alt='home-logo'
                                        width={70}
                                        height={70}
                                        src={`https://www.nba.com/assets/logos/teams/primary/web/${
                                            homeTeamData.abbreviation
                                            }.svg`}
                                    />
                                </div>}

                                {(matches.medium || matches.large) && <div className='icon-wrapper'>
                                    <img
                                        alt='home-logo'
                                        width={45}
                                        height={45}
                                        src={`https://www.nba.com/assets/logos/teams/primary/web/${
                                            homeTeamData.abbreviation
                                            }.svg`}
                                    />
                                </div>}

                                {matches.medium && <span
                                    className='team-name'
                                    style={homeWin && gameComplete ? { fontWeight: 'bold' } : null}
                                >
                                    {`${homeTeamData.name}`}
                                </span>}

                                {matches.large && <span
                                    className='team-name'
                                    style={homeWin && gameComplete ? { fontWeight: 'bold' } : null}
                                >
                                    {`${homeTeamData.city} ${homeTeamData.name}`}
                                </span>}
                            </div>
                        </React.Fragment>
                    ) : null}
                </div>
            )}

        </Media>
    ) : null;
};

export default ScoreCard;
