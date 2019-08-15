import React, { useState } from 'react';
import _ from 'lodash';
import './ScoreCard.css';

const ScoreCard = props => {
    /* START HOOKS */
    const [loadedGameData, setLoadedGameData] = useState(false);
    if (!loadedGameData && props.gameData !== undefined)
        setLoadedGameData(true);

    const [loadedRefData, setLoadedRefData] = useState(false);
    if (!loadedRefData && props.dailyRefData.teamReferences !== undefined)
        setLoadedRefData(true);
    /* END HOOKS */

    const getTeamDataByID = teamID => {
        return _.find(props.dailyRefData.teamReferences, { id: teamID });
    };

    const iconKeyMapping = teamKey => {
        switch (teamKey) {
            case 'BRO':
                return 'BKN';
            case 'OKL':
                return 'OKC';
            default:
                return teamKey;
        }
    };

    const homeTeamData = getTeamDataByID(props.gameData.homeTeam.id);
    const awayTeamData = getTeamDataByID(props.gameData.awayTeam.id);
    const homeWin =
        props.scoreData.homeScoreTotal > props.scoreData.awayScoreTotal;

    const scoreCardClick = () => {
        props.setSelectedGame(props.gameData);
        props.setGameData(props.gameData.id);
    }

    return loadedRefData && loadedGameData ? (
        <div
            className={`score-card${
                props.selectedGame.id === props.gameData.id ? ' selected' : ''
            }`}
            onClick={() => scoreCardClick()}
        >
            {homeTeamData && awayTeamData && props.scoreData ? (
                <React.Fragment>
                    <div className='team-info away'>
                        <span
                            className='team-name'
                            style={!homeWin ? { fontWeight: 'bold' } : null}
                        >
                            {`${awayTeamData.city} ${awayTeamData.name}`}
                        </span>
                        <div className='icon-wrapper'>
                            <img
                                alt='away-logo'
                                width={45}
                                height={45}
                                src={`https://www.nba.com/assets/logos/teams/primary/web/${iconKeyMapping(
                                    awayTeamData.abbreviation
                                )}.svg`}
                            />
                        </div>
                    </div>

                    <div className='game-score'>
                        <span style={!homeWin ? { fontWeight: 'bold' } : null}>
                            {props.scoreData.awayScoreTotal}
                        </span>
                        <span> - </span>
                        <span style={homeWin ? { fontWeight: 'bold' } : null}>
                            {props.scoreData.homeScoreTotal}
                        </span>
                        <br />
                        <span className='game-time'>Final</span>
                    </div>

                    <div className='team-info home'>
                        <div className='icon-wrapper'>
                            <img
                                alt='home-logo'
                                width={45}
                                height={45}
                                src={`https://www.nba.com/assets/logos/teams/primary/web/${iconKeyMapping(
                                    homeTeamData.abbreviation
                                )}.svg`}
                            />
                        </div>
                        <span
                            className='team-name'
                            style={homeWin ? { fontWeight: 'bold' } : null}
                        >
                            {`${homeTeamData.city} ${homeTeamData.name}`}
                        </span>
                    </div>
                </React.Fragment>
            ) : null}
        </div>
    ) : null;
};

export default ScoreCard;
