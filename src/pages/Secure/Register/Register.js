import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';
import './Register.css';

const Register = () => {
    // const { user, registerUser, loading, authError } = useAuth();
    const [logInData, setLogInData] = useState({});

    // const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    };

    // const handleRegisterSubmit = e => {
    //     if (logInData.password !== logInData.password2) {
    //         <Alert severity="error">Wrong! Did not Your Password Match.</Alert>
    //         return
    //     };
    //     registerUser(logInData.name, logInData.email, logInData.password, history);
    //     e.preventDefault();
    // };
    return (
        <>
            <Container>
                <p className="text-danger topMargin" >REGISTER JUNO TOYS & GAMES</p>
                <h2 className="all-heading">Register</h2>
                <Row className="d-flex  align-items-center">
                    <Col sx={12} md={6} className="all-bg p-5">
                        <form onSubmit="">
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
                        <Link className="text-decoration-none link-hover mt-3" to="/login">
                            <p className="mt-3">Already Register? Please, Login</p>
                        </Link>
                    </Col>
                    <Col sx={12} md={6}>
                        <img className="w-100" src="https://i.im.ge/2021/11/10/oYrBLG.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;

/*


*/