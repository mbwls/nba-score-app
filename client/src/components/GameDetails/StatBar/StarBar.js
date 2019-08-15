import React from 'react';
import './StatBar.css';

const StatBar = props => {
    const homeWin = props.homeWidth > props.awayWidth;
    let widthDiff = Math.abs(
        ((props.homeWidth - props.awayWidth) /
            ((props.homeWidth + props.awayWidth) / 2)) *
            50
    );

    widthDiff >= 50
        ? (widthDiff = 48 * (props.flip ? -1 : 1))
        : (widthDiff *= props.flip ? -1 : 1);

    return (
        <div className='bar-container'>
            <div className='bar-label-container'>
                <div className='bar-label home'>{props.homeLabel}</div>
                <div className='bar-label metric'>{props.metric}</div>
                <div className='bar-label away'>{props.awayLabel}</div>
            </div>
            <div
                className='bar home'
                style={{
                    width: `calc(${
                        homeWin ? 50 + widthDiff : 50 - widthDiff
                    }% - 10px)`
                }}
            />
            <div
                className='bar away'
                style={{
                    width: `calc(${
                        homeWin ? 50 - widthDiff : 50 + widthDiff
                    }% - 10px)`
                }}
            />
        </div>
    );
};

export default StatBar;
