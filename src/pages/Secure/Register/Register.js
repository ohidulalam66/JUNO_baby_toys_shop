import React, { useState } from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
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
        const newLoginData = { ...RegisterData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
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
                    <Col sx={12} md={6} className="all-bg p-5">
                        {!loading &&
                            <form onSubmit={handleRegisterSubmit}>
                                <FloatingLabel
                                    required
                                    label="Name*"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    className="my-3"
                                >
                                    <Form.Control placeholder="name" type="name" />
                                </FloatingLabel>
                                <FloatingLabel
                                    required
                                    label="Email*"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    className="my-3"
                                >
                                    <Form.Control placeholder="name@example.com" type="email" />
                                </FloatingLabel>
                                <FloatingLabel
                                    required
                                    label="Password*"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    className="my-3"
                                >
                                    <Form.Control placeholder="..." type="password" />
                                </FloatingLabel>
                                <FloatingLabel
                                    required
                                    label="Re-Password*"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    className="my-3"
                                >
                                    <Form.Control placeholder="..." type="password" />
                                </FloatingLabel>
                                <button type="submit">REGISTER</button>
                            </form>
                        }

                        {loading && <Spinner size="md" animation="grow" />}

                        {user.email &&
                            <Alert className="my-3" variant="success">Congress! Created Register Successfully.</Alert>}

                        {error && <Alert className="my-3" variant="danger">
                            {error}
                        </Alert>}

                        <Link className="text-decoration-none link-hover mt-3" to="/login">
                            <p className="mt-3">Already Register? Please, Login</p>
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