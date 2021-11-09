import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './DiscoverNow.css';

const DiscoverNow = () => {
    return (
        <>
            <div className="discoverNow-bg py-3">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col xs={12} md={6}>
                            <img className="w-100" src="https://i.im.ge/2021/11/10/oYouDJ.png" alt="" />
                        </Col>
                        <Col xs={12} md={6} className="discover-content">
                            <p>WHAT WE DO</p>
                            <h1 className="discover-Heading">
                                We help organize <br /> events for kids.
                            </h1>
                            <p>Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!</p>
                            <Button className="rounded-pill py-3 px-4">Discover Now</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default DiscoverNow;

// 