import React, { useState } from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const [logInData, setLogInData] = useState({});
    const { user, loginUser, loading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    };

    const handleLoginSubmit = e => {
        loginUser(logInData.email, logInData.password, location, history);
        e.preventDefault();
    };
    return (
        <>
            <Container>
                <p className="topMargin text-danger" >LOGIN JUNO TOYS & GAMES</p>
                <h2 className="all-heading">Login</h2>
                <Row className="d-flex  align-items-center">
                    <Col sx={12} md={6}>
                        <img className="w-100" src="https://i.im.ge/2021/11/10/oYrBLG.png" alt="" />
                    </Col>
                    <Col sx={12} md={6} className="all-bg p-5">
                        <form onSubmit={handleLoginSubmit}>
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
                                label="Password"
                                name="password"
                                onBlur={handleOnBlur}
                                className="my-3"
                            >
                                <Form.Control placeholder="..." type="password" />
                            </FloatingLabel>
                            <button type="submit">LOGIN</button>
                        </form>
                        {loading && <Spinner size="md" animation="grow" />}

                        {user.email &&
                            <Alert className="my-3" variant="success">Congress! Created Register Successfully.</Alert>}

                        {error && <Alert className="my-3" variant="danger">
                            {error}
                        </Alert>}
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