import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import DateNav from '../../components/DateNav/DateNav';
import ScoreFilterMenu from '../../components/ScoreFilterMenu/ScoreFilterMenu';
import 'antd/dist/antd.css';
import './ScoresView.css';
import GameList from '../../components/GameList/GameList';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/scoresViewAction';

const { Header, Content } = Layout;

class ScoresView extends Component {
    render() {
        return (
            <div className='scores-view'>
                <Layout>
                    <Header>
                        <Layout>
                            <Row>
                                <DateNav {...this.props} />
                            </Row>
                        </Layout>
                    </Header>
                    <Content>
                        <Layout>
                            <Row className='main-content-row'>
                                <Col
                                    className='main-content-col content-game-list'
                                    span={11}
                                >
                                    <ScoreFilterMenu />
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
