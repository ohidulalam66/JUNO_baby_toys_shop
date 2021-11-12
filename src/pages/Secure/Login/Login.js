import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const [logInData, setLogInData] = useState({});
    const { user, loginUser, signInWithGoogle, loading, error } = useAuth();

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

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
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
                    <Col sx={12} md={6} className="form-bg p-5">
                        <form onSubmit={handleLoginSubmit}>
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
                            <Button variant="success" className="my-3" type="submit">LOGIN</Button>
                        </form>

                        {loading && <Spinner animation="border" variant="success" className="spinnerSize" />}

                        {user.email &&
                            <Alert className="my-3 fontSize" variant="success">Congress! Login Successfully.</Alert>}

                        {error && <Alert className="my-3 fontSize" variant="danger">
                            {error}
                        </Alert>}
                        <Button className="google-btn" variant="btn btn-outline-danger" onClick={handleGoogleSignIn}><i className="fab fa-google google-icon"></i></Button>
                        <Link className="text-decoration-none link-hover" to="/register">
                            <Button variant="btn btn-outline-dark">New User? Please, Register</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;