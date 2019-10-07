import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './CompareView.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/compareViewAction';

const { Content } = Layout;

class CompareView extends Component {
    render() {
        return (
            <div className='compare-view'>
                <h1>Compare View</h1>
                <Layout>
                    <Content />
                </Layout>
            </div>
        )
    }
}

export default connect(
    state => {
        return state.compareView;
    },
    dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(CompareView);
