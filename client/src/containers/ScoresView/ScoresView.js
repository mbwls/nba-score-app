import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import DateNav from '../../components/DateNav/DateNav';
import 'antd/dist/antd.css';
import './ScoresView.css';
import GameList from '../../components/GameList/GameList';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/scoresViewAction';

const { Content } = Layout;

class ScoresView extends Component {
    render() {
        return (
            <div className='scores-view'>
                <Layout>
                    <Content>
                        <Layout>
                            <Row className='header-content-row'>
                                <DateNav {...this.props} />
                            </Row>
                            <Row className='main-content-row'>
                                <Col
                                    className='main-content-col content-game-list'
                                    span={11}
                                >
                                    <GameList {...this.props} />
                                </Col>
                                <Col
                                    className='main-content-col content-game-details'
                                    span={13}
                                >
                                    SELECT A GAME
                                </Col>
                            </Row>
                        </Layout>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default connect(
    state => {
        return state.scoresView;
    },
    dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(ScoresView);
