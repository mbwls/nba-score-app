import React from 'react';
import './TeamStats.css';
import StatBar from '../StatBar/StarBar';

const TeamStats = props => {
    return (
        <div className='team-stats'>
            <div className='header-title'>Team Stats</div>
            <div className='card-header'>
                <div className='home card-team-abbr'>OKC</div>
                <div className='away card-team-abbr'>MIN</div>
            </div>
            <StatBar metric='FG (%)' homeWidth={25} awayWidth={75} />
            <StatBar metric='3PT FG (%)' homeWidth={66} awayWidth={34} />
            <StatBar metric='FT (%)' homeWidth={50} awayWidth={50} />
            <StatBar metric='Rebounds' homeWidth={55} awayWidth={45} />
            <StatBar
                metric='Offensive Rebounds'
                homeWidth={25}
                awayWidth={75}
            />
            <StatBar metric='Assists' homeWidth={25} awayWidth={75} />
            <StatBar metric='Steals' homeWidth={25} awayWidth={75} />
            <StatBar metric='Blocks' homeWidth={25} awayWidth={75} />
            <StatBar metric='Turnovers' homeWidth={25} awayWidth={75} />
            <StatBar metric='Personal Fouls' homeWidth={25} awayWidth={75} />
        </div>
    );
};

export default TeamStats;
