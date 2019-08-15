import React, { useState } from 'react';
import './TeamStats.css';
import StatBar from '../StatBar/StarBar';

const TeamStats = props => {
    /* START HOOKS */
    const [loadedStats, setLoadedStats] = useState(false);
    if (!loadedStats && props.gameData.stats !== undefined)
        setLoadedStats(true);
    /* END HOOKS */

    const awayStats = loadedStats
        ? props.gameData.stats.away.teamStats[0]
        : undefined;
    const homeStats = loadedStats
        ? props.gameData.stats.home.teamStats[0]
        : undefined;

    return loadedStats ? (
        <div className='team-stats'>
            <div className='header-title'>Team Stats</div>
            <div className='card-header'>
                <div className='home card-team-abbr'>OKC</div>
                <div className='away card-team-abbr'>MIN</div>
            </div>

            {/* FIELD GOAL % */}
            <StatBar
                metric='FG (%)'
                homeLabel={`${homeStats.fieldGoals.fgMade}/${
                    homeStats.fieldGoals.fgAtt
                } (${homeStats.fieldGoals.fgPct}%)`}
                homeWidth={homeStats.fieldGoals.fgPct}
                awayLabel={`${awayStats.fieldGoals.fgMade}/${
                    awayStats.fieldGoals.fgAtt
                } (${awayStats.fieldGoals.fgPct}%)`}
                awayWidth={awayStats.fieldGoals.fgPct}
            />

            {/* 3PT FIELD GOAL % */}
            <StatBar
                metric='3PT FG (%)'
                homeLabel={`${homeStats.fieldGoals.fg3PtMade}/${
                    homeStats.fieldGoals.fg3PtAtt
                } (${homeStats.fieldGoals.fg3PtPct}%)`}
                homeWidth={homeStats.fieldGoals.fg3PtPct}
                awayLabel={`${awayStats.fieldGoals.fg3PtMade}/${
                    awayStats.fieldGoals.fg3PtAtt
                } (${awayStats.fieldGoals.fg3PtPct}%)`}
                awayWidth={awayStats.fieldGoals.fg3PtPct}
            />

            {/* FREE THROW % */}
            <StatBar
                metric='FT (%)'
                homeLabel={`${homeStats.freeThrows.ftMade}/${
                    homeStats.freeThrows.ftAtt
                } (${homeStats.freeThrows.ftPct}%)`}
                homeWidth={homeStats.freeThrows.ftPct}
                awayLabel={`${awayStats.freeThrows.ftMade}/${
                    awayStats.freeThrows.ftAtt
                } (${awayStats.freeThrows.ftPct}%)`}
                awayWidth={awayStats.freeThrows.ftPct}
            />

            {/* REBOUNDS */}
            <StatBar
                metric='Rebounds'
                homeLabel={homeStats.rebounds.reb}
                homeWidth={homeStats.rebounds.reb}
                awayLabel={awayStats.rebounds.reb}
                awayWidth={awayStats.rebounds.reb}
            />

            {/* OFFENSIVE REBOUNDS */}
            <StatBar
                metric='Offensive Rebounds'
                homeLabel={homeStats.rebounds.offReb}
                homeWidth={homeStats.rebounds.offReb}
                awayLabel={awayStats.rebounds.offReb}
                awayWidth={awayStats.rebounds.offReb}
            />

            {/* ASSISTS */}
            <StatBar
                metric='Assists'
                homeLabel={homeStats.offense.ast}
                homeWidth={homeStats.offense.ast}
                awayLabel={awayStats.offense.ast}
                awayWidth={awayStats.offense.ast}
            />

            {/* STEALS */}
            <StatBar
                metric='Steals'
                homeLabel={homeStats.defense.stl}
                homeWidth={homeStats.defense.stl}
                awayLabel={awayStats.defense.stl}
                awayWidth={awayStats.defense.stl}
            />

            {/* BLOCKS */}
            <StatBar
                metric='Blocks'
                homeLabel={homeStats.defense.blk}
                homeWidth={homeStats.defense.blk}
                awayLabel={awayStats.defense.blk}
                awayWidth={awayStats.defense.blk}
            />

            {/* TURNOVERS */}
            <StatBar
                metric='Turnovers'
                flip={true}
                homeLabel={homeStats.defense.tov}
                homeWidth={homeStats.defense.tov}
                awayLabel={awayStats.defense.tov}
                awayWidth={awayStats.defense.tov}
            />

            {/* PERSONAL FOULS */}
            <StatBar
                metric='Personal Fouls'
                flip={true}
                homeLabel={homeStats.miscellaneous.foulPers}
                homeWidth={homeStats.miscellaneous.foulPers}
                awayLabel={awayStats.miscellaneous.foulPers}
                awayWidth={awayStats.miscellaneous.foulPers}
            />
        </div>
    ) : null;
};

export default TeamStats;
