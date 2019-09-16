import { DatePicker } from 'antd';
import React from 'react';
import moment from 'moment';
import '../DateNav.css';

const DateSelect = props => {
    return (
        <DatePicker
            defaultValue={moment(props.dateKey).clone()}
            className='date-btn'
            placeholder=''
            onChange={(date, dateString) => {
                props.setScoresDate(dateString);
            }}
        />
    )
}

export default DateSelect;
