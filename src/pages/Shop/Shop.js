/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Shop.css';

const Shop = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const { name, image, description, categories, price } = product;

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const nameRef = useRef();
    const emailRef = useRef();
    const productNameRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleSubmit = e => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const productName = productNameRef.current.value;
        const locationName = locationRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const addNewInfo = { name, email, productName, price, locationName, quantity };

        fetch(("http://localhost:5000/orders"), {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booked Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    };
    return (
        <>
            <div className="PopularStore-bg">
                <p className="text-danger topMargin" >SHOP JUNO TOYS & GAMES</p>
                <h2 className="all-heading">Shop</h2>
                <Container>
                    <Row xs={1} md={2} className="py-4 d-flex justify-content-between align-items-center">
                        <Col>
                            <img src={image} className="img-fluid w-75 mb-3 rounded" alt="" />
                            <p><span className="fw-bold text-decoration-underline">Description: </span>{description}</p>
                            <h4 className="text-success">Categories: {categories}</h4>
                        </Col>
                        <Col>
                            <form className="booking-form py-3" onSubmit={handleSubmit}>
                                <input defaultValue={user.displayName} ref={nameRef} />
                                <input defaultValue={user.email} ref={emailRef} />
                                <input defaultValue={name} ref={productNameRef} />
                                <input defaultValue={price} ref={priceRef} />
                                <input type="text" ref={locationRef} placeholder="Your Location" />
                                <input type="number" ref={quantityRef} placeholder="Quantity" />
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Shipping 5%/7D</option>
                                    <option value="1">Shipping  10%/3D</option>
                                </select>
                                <input className="btn-link" type="submit" value="Place Order" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Shop;