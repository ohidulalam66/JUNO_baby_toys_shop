import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CustomerReview.css';

const CustomerReview = ({ customerReview }) => {
    const { name, email, review } = customerReview;
    return (
        <>
            <Col>
                <Card className="product-card">
                    <Card.Body>
                        <Card.Title><h5>{name}</h5></Card.Title>
                        <Card.Text>
                            <p className="product-name">{email}</p>
                            <p className="review-message"><span className="text-dark">Review:</span> {review}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CustomerReview;