import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
            <div className="d-flex justify-content-center  mx-auto pt-5 mb-5 contact-content">
                <Row sx={4} md={4}>
                    <Col>
                        <img className="img-fluid" src="https://i.im.ge/2021/11/15/obhJz0.png" alt="" />
                        <h6 className="text-danger">ADDRESS</h6>
                        <p className="address">Chittagong, Bangladesh</p>
                    </Col>
                    <Col>
                        <img className="img-fluid" src="https://i.im.ge/2021/11/15/obhBjc.png" alt="" />
                        <h6 className="text-warning">TELEPHONE</h6>
                        <p className="phone">0123659874</p>
                    </Col>
                    <Col>
                        <img className="img-fluid" src="https://i.im.ge/2021/11/15/obhGWL.png" alt="" />
                        <h6 className="text-info">EMAIL</h6>
                        <p className="email">mdnoyonctg15@gmail.com</p>
                    </Col>
                    <Col>
                        <img className="img-fluid" src="https://i.im.ge/2021/11/15/obiMTG.png" alt="" />
                        <h6 className="text-success">WEBSITE</h6>
                        <p className="website">https://juno-baby-toys-shop.web.app/</p>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ContactUs;


/*
https://i.im.ge/2021/11/15/obhJz0.png(Address)
https://i.im.ge/2021/11/15/obhBjc.png(telePhone)
https://i.im.ge/2021/11/15/obhGWL.png(email)
https://i.im.ge/2021/11/15/obiMTG.png(Website)
*/