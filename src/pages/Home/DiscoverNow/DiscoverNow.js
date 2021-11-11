import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web'
import './DiscoverNow.css';

const DiscoverNow = () => {
    const styles = useSpring({
        loop: true,
        to: [
            { color: '#74E0FE' },
            { color: '#E9282B' },
        ],
        from: { color: '#8FBE2D' },
    })
    return (
        <>
            <div className="all-bg py-3">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col xs={12} md={6}>
                            <img className="w-100" src="https://i.im.ge/2021/11/10/oYouDJ.png" alt="" />
                        </Col>
                        <Col xs={12} md={6} className="discover-content">
                            <animated.div style={styles}>
                                <p>WHAT WE DO</p>
                                <h1 className="discover-Heading">
                                    We help organize <br /> events for kids.
                                </h1>
                                <p>Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!</p>
                            </animated.div>
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