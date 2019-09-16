import React, { useState } from 'react';
import DateSelect from './DateSelect/DateSelect';
import moment from 'moment';
import Media from 'react-media';
import APPCONST from '../../config/constants';
import './DateNav.css';

const DateNav = props => {
    // BEGIN HOOKS
    const [loadedScoreData, setLoadedScoreData] = useState(false);
    if (!loadedScoreData) {
        props.setScoresDate(
            moment(props.dateKey)
                .clone()
                .format('YYYYMMDD')
        );
        setLoadedScoreData(true);
    }
    const [loadedReferenceData, setLoadedReferenceData] = useState(false);
    if (!loadedReferenceData) {
        props.setReferenceData();
        setLoadedReferenceData(true);
    }
    // END HOOKS

    let days = [],
        daysShort = [],
        i = 1;
    let weekStart = moment(props.dateKey).subtract(
        moment(props.dateKey).isoWeekday(),
        'd'
    );

    // FULL WEEK FOR FULL WIDTH
    while (i <= 7) {
        days.push(
            moment(weekStart)
                .clone()
                .add(i, 'd')
        );
        i++;
    }

    // THREE DAYS FOR SMALL WIDTH
    daysShort.push(moment(props.dateKey).clone().subtract(1, 'd'));
    daysShort.push(moment(props.dateKey).clone());
    daysShort.push(moment(props.dateKey).clone().add(1, 'd'));

    return (
        <Media queries={{
            small: '(max-width: 820px)',
            large: '(min-width: 821px)'
        }}>
            {matches => (
                <React.Fragment>
                    {matches.large && <React.Fragment>
                        <nav className='date-nav'>
                            <ul>
                                {days.map(d => {
                                    return (
                                        <li key={moment(d).format('YYYY-MM-DD')}>
                                            <div
                                                value={d}
                                                className={
                                                    d.startOf('day').isSame(
                                                        moment(props.dateKey)
                                                            .clone()
                                                            .startOf('day')
                                                    )
                                                        ? 'current-date date-label'
                                                        : 'date-label'
                                                }
                                                onClick={() => props.setScoresDate(d)}
                                            >
                                                {d.startOf('day').isSame(APPCONST.TODAY)
                                                    ? 'Today'
                                                    : d
                                                        .startOf('day')
                                                        .isSame(APPCONST.YESTERDAY)
                                                        ? 'Yesterday'
                                                        : d
                                                            .startOf('day')
                                                            .isSame(APPCONST.TOMORROW)
                                                            ? 'Tomorrow'
                                                            : moment(d).format('ddd D MMM')}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <DateSelect {...props} />
                    </React.Fragment>}

                    {matches.small && <nav className='date-nav'>
                        <ul>
                            {daysShort.map(d => {
                                return (
                                    <li key={moment(d).format('YYYY-MM-DD')}>
                                        <div
                                            value={d}
                                            className={
                                                d.startOf('day').isSame(
                                                    moment(props.dateKey)
                                                        .clone()
                                                        .startOf('day')
                                                )
                                                    ? 'current-date date-label'
                                                    : 'date-label'
                                            }
                                            onClick={() => props.setScoresDate(d)}
                                        >
                                            {d.startOf('day').isSame(APPCONST.TODAY)
                                                ? 'Today'
                                                : d
                                                    .startOf('day')
                                                    .isSame(APPCONST.YESTERDAY)
                                                    ? 'Yesterday'
                                                    : d
                                                        .startOf('day')
                                                        .isSame(APPCONST.TOMORROW)
                                                        ? 'Tomorrow'
                                                        : moment(d).format('ddd D MMM')}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>}
                </React.Fragment>
            )}
        </Media>
    );
};

export default DateNav;
