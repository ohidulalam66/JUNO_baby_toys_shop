import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NOtFound.css';

const NotFound = () => {
    return (
        <>
            <div className="notFound-bg">
                <h1 className="topMargin-notFound text-white">He He!Sorry Your a Wrong page Back Home</h1>
                <Link to="/">
                    <Button variant="btn btn-outline-danger">Home</Button>
                </Link>

            </div>
        </>
    );
};

export default NotFound;