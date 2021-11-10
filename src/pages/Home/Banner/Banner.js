import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css';
import { useSpring, animated } from '@react-spring/web'

const Banner = () => {
    const styles = useSpring({
        loop: true,
        to: [
            { color: '#ffaaee' },
            { color: 'rgb(14,26,19)' },
        ],
        from: { color: 'red' },
    })
    return (
        <>
            <div className="banner-bg">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="banner-content py-3">
                                <animated.div style={styles} className="banner-heading">Pick the best <span className="heading-toy">toy</span>
                                    <br />
                                    for your kid
                                </animated.div>
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