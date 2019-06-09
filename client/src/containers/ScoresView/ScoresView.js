import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './ScoresView.css';

const { Header, Footer, Content } = Layout;

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
                                    className='main-content-col'
                                    span={8}
                                    style={{ backgroundColor: 'black' }}
                                >
                                    col-12
                                </Col>
                                <Col
                                    className='main-content-col'
                                    span={16}
                                    style={{ backgroundColor: 'blue' }}
                                >
                                    col-12
                                </Col>
                            </Row>
                        </Layout>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default ScoresView;
