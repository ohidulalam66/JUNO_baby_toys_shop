import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const [logInData, setLogInData] = useState({});
    // const { user, loginUser, signInWithGoogle, loading, authError } = useAuth();

    // const location = useLocation();
    // const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    };

    // const handleLoginSubmit = e => {
    //     loginUser(logInData.email, logInData.password, location, history);
    //     e.preventDefault();
    // };
    return (
        <>
            <Container>
                <p className="my-3 text-danger" >LOGIN JUNO TOYS & GAMES</p>
                <h2 className="all-heading">Login</h2>
                <Row className="d-flex  align-items-center">
                    <Col sx={12} md={6}>
                        <img className="w-100" src="https://i.im.ge/2021/11/10/oYrBLG.png" alt="" />
                    </Col>
                    <Col sx={12} md={6} className="all-bg p-5">
                        <form onSubmit="">
                            <FloatingLabel
                                required
                                label="Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                className="my-3"
                            >
                                <Form.Control placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel
                                required
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                className="my-3"

                            >
                                <Form.Control placeholder="password..." />
                            </FloatingLabel>
                            <button type="submit">LOGIN</button>
                        </form>
                        <button className="my-3">Google Sign In</button>
                        <Link className="text-decoration-none link-hover" to="/register">
                            <p>New User? Please, Register</p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;