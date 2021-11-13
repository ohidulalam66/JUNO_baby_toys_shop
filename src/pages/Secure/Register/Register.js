import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Register.css';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { user, registerUser, loading, error } = useAuth();
    const [RegisterData, setRegisterData] = useState({});

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...RegisterData };
        newRegisterData[field] = value;
        console.log(newRegisterData)
        setRegisterData(newRegisterData);
    };

    const handleRegisterSubmit = e => {
        if (RegisterData.password !== RegisterData.password2) {
            <Alert variant="danger">Wrong! Did not Your Password Match.</Alert>
            return
        };
        registerUser(RegisterData.name, RegisterData.email, RegisterData.password, history);
        e.preventDefault();
    };
    return (
        <>
            <Container>
                <p className="text-danger topMargin" >REGISTER JUNO TOYS & GAMES</p>
                <h2 className="all-heading">Register</h2>
                <Row className="d-flex  align-items-center">
                    <Col sx={12} md={6} className="form-bg p-5 mb-5">
                        {!loading &&
                            <form onSubmit={handleRegisterSubmit}>
                                <p className="text-start"><i className="fas fa-user icon"></i></p>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    type="name"
                                    name="name"
                                    placeholder="Your Name*" />
                                <p className="text-start"><i className="fas fa-envelope icon"></i></p>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    type="email"
                                    name="email"
                                    placeholder="Your Email*" />
                                <p className="text-start"><i className="fas fa-unlock-alt icon"></i></p>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    type="password"
                                    name="password"
                                    placeholder="Password*" />
                                <p className="text-start"><i className="fas fa-unlock-alt icon"></i></p>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    type="password"
                                    name="password2"
                                    placeholder="Re-Password*" />
                                <Button variant="btn btn-outline-success" className="my-3" type="submit">REGISTER</Button>
                            </form>
                        }

                        {loading && <Spinner animation="border" variant="success" className="spinnerSize" />}

                        {user.email &&
                            <Alert className="my-3 fontSize" variant="success">Congress! Created Register Successfully.</Alert>
                        }

                        {error && <Alert className="my-3 fontSize" variant="danger">
                            {error}
                        </Alert>}

                        <Link className="text-decoration-none link-hover mt-3" to="/login">
                            <Button variant="btn btn-outline-dark" className="mt-2">Already Register? Please, Login</Button>
                        </Link>
                    </Col>
                    <Col sx={12} md={6}>
                        <img className="w-100" src="https://i.im.ge/2021/11/11/oY1kGL.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;

/*

*/