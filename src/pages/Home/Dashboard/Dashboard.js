import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Dashboard;