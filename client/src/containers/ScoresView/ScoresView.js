import React, { Component } from 'react';
import _ from 'lodash';
import { Layout, Row, Col } from 'antd';
import DateNav from '../../components/DateNav/DateNav';
import GameList from '../../components/GameList/GameList';
import GameDetails from '../../components/GameDetails/GameDetails';
import 'antd/dist/antd.css';
import './ScoresView.css';

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
                                    className={`main-content-col content-game-list${
                                        _.isEmpty(this.props.selectedGame)
                                            ? ' open'
                                            : ''
                                    }`}
                                    span={11}
                                >
                                    <GameList {...this.props} />
                                </Col>
                                <Col
                                    className='main-content-col content-game-details'
                                    span={13}
                                >
                                    <GameDetails {...this.props} />
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
