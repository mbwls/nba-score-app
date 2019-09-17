import React, { useState } from 'react';
import _ from 'lodash';
import './TeamStats.css';
import StatBar from '../StatBar/StarBar';

const TeamStats = props => {
    /* START HOOKS */
    const [loadedStats, setLoadedStats] = useState(false);
    if (!loadedStats && props.gameData.home !== undefined && props.gameData.away !== undefined)
        setLoadedStats(true);
    /* END HOOKS */

    const awayStats = loadedStats
        ? props.gameData.away.team
        : undefined;
    const homeStats = loadedStats
        ? props.gameData.home.team
        : undefined;

    return loadedStats ? (
        <div className='team-stats'>
            <div className='header-title'>Team Stats</div>
            <div className='card-header'>
                <div className='home card-team-abbr'>{_.isEmpty(props.selectedGame) ? '' : props.selectedGame.visitor_team.abbreviation}</div>
                <div className='away card-team-abbr'>{_.isEmpty(props.selectedGame) ? '' : props.selectedGame.home_team.abbreviation}</div>
            </div>

            {/* FIELD GOAL % */}
            <StatBar
                {...props}
                metric='FG (%)'
                homeLabel={`${homeStats.fgm}/${
                    homeStats.fga
                    } (${homeStats.fg_pct}%)`}
                homeWidth={homeStats.fg_pct}
                awayLabel={`${awayStats.fgm}/${
                    awayStats.fga
                    } (${awayStats.fg_pct}%)`}
                awayWidth={awayStats.fg_pct}
            />

            {/* 3PT FIELD GOAL % */}
            <StatBar
                {...props}
                metric='3PT FG (%)'
                homeLabel={`${homeStats.fg3m}/${
                    homeStats.fg3a
                    } (${homeStats.fg3_pct}%)`}
                homeWidth={homeStats.fg3_pct}
                awayLabel={`${awayStats.fg3m}/${
                    awayStats.fg3a
                    } (${awayStats.fg3_pct}%)`}
                awayWidth={awayStats.fg3_pct}
            />

            {/* FREE THROW % */}
            <StatBar
                {...props}
                metric='FT (%)'
                homeLabel={`${homeStats.ftm}/${
                    homeStats.fta
                    } (${homeStats.ft_pct}%)`}
                homeWidth={homeStats.ft_pct}
                awayLabel={`${awayStats.ftm}/${
                    awayStats.fta
                    } (${awayStats.ft_pct}%)`}
                awayWidth={awayStats.ft_pct}
            />

            {/* REBOUNDS */}
            <StatBar
                {...props}
                metric='Rebounds'
                homeLabel={homeStats.reb}
                homeWidth={homeStats.reb}
                awayLabel={awayStats.reb}
                awayWidth={awayStats.reb}
            />

            {/* OFFENSIVE REBOUNDS */}
            <StatBar
                {...props}
                metric='Offensive Rebounds'
                homeLabel={homeStats.oreb}
                homeWidth={homeStats.oreb}
                awayLabel={awayStats.oreb}
                awayWidth={awayStats.oreb}
            />

            {/* ASSISTS */}
            <StatBar
                {...props}
                metric='Assists'
                homeLabel={homeStats.ast}
                homeWidth={homeStats.ast}
                awayLabel={awayStats.ast}
                awayWidth={awayStats.ast}
            />

            {/* STEALS */}
            <StatBar
                {...props}
                metric='Steals'
                homeLabel={homeStats.stl}
                homeWidth={homeStats.stl}
                awayLabel={awayStats.stl}
                awayWidth={awayStats.stl}
            />

            {/* BLOCKS */}
            <StatBar
                {...props}
                metric='Blocks'
                homeLabel={homeStats.blk}
                homeWidth={homeStats.blk}
                awayLabel={awayStats.blk}
                awayWidth={awayStats.blk}
            />

            {/* TURNOVERS */}
            <StatBar
                {...props}
                metric='Turnovers'
                flip={true}
                homeLabel={homeStats.turnover}
                homeWidth={homeStats.turnover}
                awayLabel={awayStats.turnover}
                awayWidth={awayStats.turnover}
            />

            {/* PERSONAL FOULS */}
            <StatBar
                {...props}
                metric='Personal Fouls'
                flip={true}
                homeLabel={homeStats.pf}
                homeWidth={homeStats.pf}
                awayLabel={awayStats.pf}
                awayWidth={awayStats.pf}
            />
        </div>
    ) : null;
};

export default TeamStats;
