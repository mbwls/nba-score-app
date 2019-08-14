import React from 'react';
import './StatBar.css';

const StatBar = props => {
    return (
        <div className='bar-container'>
            <div className='bar-label-container'>
                <div className='bar-label home'>39/80 (48%)</div>
                <div className='bar-label metric'>{props.metric}</div>
                <div className='bar-label away'>39/82 (47%)</div>
            </div>
            <div
                className='bar home'
                style={{ width: 'calc(' + props.homeWidth + '% - 10px)' }}
            />
            <div
                className='bar away'
                style={{ width: 'calc(' + props.awayWidth + '% - 10px)' }}
            />
        </div>
    );
};

export default StatBar;
