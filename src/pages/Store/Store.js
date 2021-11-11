import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Store.css';

const Store = ({ storeProduct }) => {
    const { image, name, price } = storeProduct;
    return (
        <>
            <Col>
                <Card className="product-card">
                    <Card.Img className="product-img" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="product-name">{name}</Card.Title>
                        <Card.Text>
                            <p>${price}</p>
                            <button><i className="fas fa-cart-plus"></i> Purchase</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Store;