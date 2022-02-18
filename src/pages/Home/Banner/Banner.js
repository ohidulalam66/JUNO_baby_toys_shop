import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import './Banner.css'
import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom'

const Banner = () => {
  const styles = useSpring({
    loop: true,
    to: [{ color: '#ffaaee' }, { color: 'rgb(14,26,19)' }],
    from: { color: 'red' },
  })
  return (
    <>
      <div className="topPadding mb-5">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-content py-3">
                <animated.div style={styles} className="banner-heading">
                  Pick the best <span className="heading-toy">TOY </span>
                  for your kid
                </animated.div>
                <p>
                  We offer a premium service, whether you are shopping at one
                  our flagship stores or via our website !
                </p>
                <Link to="/learnMore">
                  <Button variant="btn btn-outline-info" className=" px-4">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img
                className="img-fluid w-100"
                src="https://i.ibb.co/HdRkbF4/Toys-for-kids-removebg-preview.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Banner
