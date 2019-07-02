import React, { useState } from 'react';
import moment from 'moment';
import APPCONST from '../../config/constants';
import { DatePicker } from 'antd';
import './DateNav.css';

const DateNav = props => {
    const [loadedScoreData, setLoadedScoreData] = useState(false);
    if (!loadedScoreData) {
        props.setScoresDate(moment(props.dateKey).clone().format('YYYYMMDD'));
        setLoadedScoreData(true);
    }
    
    let days = [],
        i = 1;
    let weekStart = moment(props.dateKey).subtract(
        moment(props.dateKey).isoWeekday(),
        'd'
    );

    while (i <= 7) {
        days.push(
            moment(weekStart)
                .clone()
                .add(i, 'd')
        );
        i++;
    }

    return (
        <React.Fragment>
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
            <DatePicker
                className='date-btn'
                placeholder=''
                onChange={(date, dateString) => {
                    props.setScoresDate(dateString);
                }}
            />
        </React.Fragment>
    );
};

export default DateNav;
