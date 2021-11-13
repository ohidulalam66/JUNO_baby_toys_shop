import React from 'react';
import { Container } from 'react-bootstrap';
import './DashboardHome.css';

const DashboardHome = () => {
    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >WELCOME JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">Welcome to Our Panel!</h2>
            </Container>
        </>
    );
};

export default DashboardHome;