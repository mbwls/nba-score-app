import React from 'react';
import { DatePicker } from 'antd';
import './DateNav.css';

const DateNav = props => {
    return (
        <React.Fragment>
            <nav className='date-nav'>
                <ul>
                    <li>
                        <div>TEST</div>
                    </li>
                    <li>TEST</li>
                    <li>TEST</li>
                    <li>TEST</li>
                    <li>TEST</li>
                    <li>TEST</li>
                    <li>TEST</li>
                </ul>
            </nav>
            <DatePicker className='date-btn' placeholder='' />         
        </React.Fragment>
    );
};

export default DateNav;
