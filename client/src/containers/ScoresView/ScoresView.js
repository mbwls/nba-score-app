import React, { Component } from 'react';
import _ from 'lodash';
import { Layout, Row, Col } from 'antd';
import Media from 'react-media';
import DateNav from '../../components/DateNav/DateNav';
import GameList from '../../components/GameList/GameList';
import GameDetails from '../../components/GameDetails/GameDetails';
import DateSelect from '../../components/DateNav/DateSelect/DateSelect';
import 'antd/dist/antd.css';
import './ScoresView.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/scoresViewAction';

const { Content } = Layout;

class ScoresView extends Component {
    render() {
        return (
            <Media queries={{
                small: '(max-width: 820px)',
                large: '(min-width: 821px)'
            }}>
                {matches => (
                    <div className='scores-view'>
                        <Layout>
                            <Content>
                                <Layout>
                                    {matches.small && <Row className='header-content-row'>
                                        <h1 className='main-title'>NBA Scorecard</h1>
                                        <DateSelect {...this.props} />
                                    </Row>}
                                    {matches.large && <Row className='header-content-row'>
                                        <h1 className='main-title'>NBA Scorecard</h1>
                                    </Row>}
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
                )}
            </Media>
        );
    }
}

export default connect(
    state => {
        return state.scoresView;
    },
    dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(ScoresView);
