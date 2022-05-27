import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./DashboardHome.css";

const DashboardHome = ({ handleShow }) => {
  return (
    <>
      <Container className="my-4 dashboard-bg">
        <p className="text-danger topMargin">WELCOME JUNO TOYS & GAMES</p>
        <h2 className="all-heading">Welcome to Our Panel!</h2>
        <Row className="d-flex justify-content-around align-items-center">
          <Col sx={1} md={5}>
            <h3>
              Please, open the drawer and you will see your service as a{" "}
              <span className="fw-bold fs-2 text-success">Customer</span> or{" "}
              <span className="fw-bold fs-2 text-danger">Admin</span>.
            </h3>
            <Button
              variant="outline-success"
              className="main-dashboard-link"
              onClick={handleShow}
            >
              <i className="fas fa-arrow-left hover-icon"></i> Open Drawer
            </Button>
          </Col>
          <Col sx={1} md={7}>
            <img
              className="w-75"
              src="https://i.im.ge/2021/11/13/oYZRB1.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardHome;
