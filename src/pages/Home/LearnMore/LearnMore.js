import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './LearnMore.css'

const LearnMore = () => {
  return (
    <>
      <Container>
        <p className="text-danger topMargin">LEARN MORE JUNO TOYS & GAMES</p>
        <h2 className="all-heading">Learn More</h2>
        <Row className="d-flex align-items-center">
          <Col sx={1} md={5}>
            <img
              className="learnMore-img img-fluid"
              src="https://i.postimg.cc/rw9zh23p/d61c4ecaf0bd33c954e35d5e5de6599f.png"
              alt=""
            />
          </Col>
          <Col sx={1} md={7}>
            <h2 className="all-heading">Our Team</h2>
            <hr />
            <Row className="g-4">
              <Col sx={1} md={4}>
                <img
                  className="w-100"
                  src="https://i.postimg.cc/pdGbTshC/how-to-become-an-online-business-manager.jpg"
                  alt=""
                />
                <div>
                  <h5>Tim Barton</h5>
                  <p className="text-secondary">Creative Director</p>
                </div>
              </Col>
              <Col sx={1} md={4}>
                <img
                  className="w-100"
                  src="https://i.postimg.cc/C50NVghQ/hire-a-manager-for-your-small-business.jpg"
                  alt=""
                />
                <div>
                  <h5>Team Saff</h5>
                  <p className="text-secondary">CEO</p>
                </div>
              </Col>
              <Col sx={1} md={4}>
                <img
                  className="w-100"
                  src="https://i.postimg.cc/4dQcVhGW/6786796-preview.png"
                  alt=""
                />
                <div>
                  <h5>Garry Freemont</h5>
                  <p className="text-secondary">Sales Manager</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mb-5">
          <h2 className="all-heading">JUNO Baby Toy Shop</h2>
          <hr />
          <p>
            Kids will go wild over the Wildluvs Juno, My Baby Elephant toy. Juno
            comes with more than 150 sounds and movements, including a highly
            realistic and playful moving trunk that responds to your touch. She
            can make trumpet noises from her trunk, eat her peanut, play games
            with you, interact with her toy mouse, and more. The more you play
            with Juno, the more you’ll get to know her silly personality. Juno
            also responds to sensors on her forehead and cheeks, responding with
            coos, ear flaps, and other happy noises. Use the peanut to train her
            to do different tricks. Give Juno her mouse to activate four fun
            games! Or press the button on Juno’s back to make her do a fun trick
            or dance. Juno’s legs are poseable so that she can stand or sit,
            perfect for holding Juno. Kids will love caring for their own baby
            elephant and seeing all the fun things that Juno can do! Batteries
            are not included.Pat Juno’s forehead, cheeks and trunk to see her
            responses! She’ll display 150+ sounds and motions. Watch out, she
            likes to swing her trunk around and make it play a trumpet sound!The
            more you play with Juno, the more she’ll learn. Train her to sit,
            swing her trunk and dance. She’ll play with her toy mouse, sing, eat
            a peanut and even play peek-a-boo with you!
          </p>
        </div>
      </Container>
    </>
  )
}

export default LearnMore

/*



*/
