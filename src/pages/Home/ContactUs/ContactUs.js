import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <div className="d-flex justify-content-center  mx-auto pt-5 mb-5 contact-content">
        <Row sx={4} md={4}>
          <Col c>
            <img
              src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-address-user-interface-flatart-icons-flat-flatarticons.png"
              alt=""
            />
            <h6 className="text-danger">ADDRESS</h6>
            <p className="text-font">Chittagong, Bangladesh</p>
          </Col>
          <Col>
            <img
              src="https://img.icons8.com/color/64/000000/voip-gateway.png"
              alt=""
            />
            <h6 className="text-light">TELEPHONE</h6>
            <p className="text-font">0123659874</p>
          </Col>
          <Col>
            <img
              src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-email-notifications-justicon-flat-justicon-1.png"
              alt=""
            />
            <h6 className="text-info">EMAIL</h6>
            <p className="text-font">mdohidul.alam15@gmail.com</p>
          </Col>
          <Col>
            <img
              src="https://img.icons8.com/ultraviolet/64/000000/domain.png"
              alt=""
            />
            <h6 className="text-success">WEBSITE</h6>
            <p className="text-font">https://juno-baby-toys-shop.web.app/</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ContactUs

/*
https://i.im.ge/2021/11/15/obhJz0.png(Address)
https://i.im.ge/2021/11/15/obhBjc.png(telePhone)
https://i.im.ge/2021/11/15/obhGWL.png(email)
https://i.im.ge/2021/11/15/obiMTG.png(Website)
*/
