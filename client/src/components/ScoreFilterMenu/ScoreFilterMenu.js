import React, { Component } from 'react';
import { Button } from 'antd';
import './ScoreFilterMenu.css'

class ScoreFilterMenu extends Component {
    render() {
        return (
            <div className='score-filter-menu'>
                <Button type='primary'>Primary</Button>
                <Button>Default</Button>
            </div>
        );
    }
}

export default ScoreFilterMenu;
