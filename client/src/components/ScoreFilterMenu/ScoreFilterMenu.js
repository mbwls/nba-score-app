import React, { Component } from 'react';
import { Button } from 'antd';
import './ScoreFilterMenu.css'

class ScoreFilterMenu extends Component {
    render() {
        return (
            <div className='score-filter-menu'>
                <Button type='primary'>Filter</Button>
                <Button>Buttons</Button>
                <Button>TBD</Button>
            </div>
        );
    }
}

export default ScoreFilterMenu;
