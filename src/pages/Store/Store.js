import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Store.css';

const Store = ({ storeProduct }) => {
    const { _id, image, name, price } = storeProduct;
    return (
        <>
            <Col>
                <Card className="product-card">
                    <Card.Img className="product-img" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="product-name"><h4>{name}</h4></Card.Title>
                        <Card.Text>
                            <h5>${price}</h5>
                        </Card.Text>
                        <Link to={`/shop/${_id}`}>
                            <button><i className="fas fa-cart-plus"></i> Purchase</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Store;