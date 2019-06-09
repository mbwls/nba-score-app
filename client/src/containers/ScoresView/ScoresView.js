import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ScoreFilterMenu from '../../components/ScoreFilterMenu/ScoreFilterMenu'
import 'antd/dist/antd.css';
import './ScoresView.css';

const { Header, Content } = Layout;

class ScoresView extends Component {
    render() {
        return (
            <div className='scores-view'>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <Layout>
                            <Row className='main-content-row'>
                                <Col
                                    className='main-content-col content-game-list'
                                    span={11}
                                >
                                    <ScoreFilterMenu />
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

export default ScoresView;
