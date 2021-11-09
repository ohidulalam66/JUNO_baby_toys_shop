import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-bg">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="banner-content py-3">
                                <h1 className="banner-heading">Pick the best <span className="heading-toy">toy</span>
                                    <br />
                                    for your kid
                                </h1>
                                <p>We offer a premium service, whether you are shopping at one our flagship stores or via our website !</p>
                                <Button className="rounded-pill py-3 px-4">Learn More</Button>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Banner;