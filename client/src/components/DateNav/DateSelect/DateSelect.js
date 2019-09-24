import { DatePicker } from 'antd';
import React from 'react';
import moment from 'moment';
import Media from 'react-media';
import '../DateNav.css';

const DateSelect = props => {
    return (
        <Media queries={{
            small: '(max-width: 820px)',
            large: '(min-width: 821px)'
        }}>
            {matches => (
                <React.Fragment>
                    {matches.small &&
                        <DatePicker
                            defaultValue={moment(props.dateKey).clone()}
                            className='date-btn'
                            placeholder=''
                            onChange={(date, dateString) => {
                                props.setSelectedGame({});
                                props.setScoresDate(dateString);
                            }}
                        />}

                    {matches.large &&
                        <DatePicker
                            defaultValue={moment(props.dateKey).clone()}
                            className='date-btn'
                            placeholder=''
                            onChange={(date, dateString) => {
                                props.setScoresDate(dateString);
                            }}
                        />}
                </React.Fragment>
            )}
        </Media>
    )
}

export default DateSelect;
