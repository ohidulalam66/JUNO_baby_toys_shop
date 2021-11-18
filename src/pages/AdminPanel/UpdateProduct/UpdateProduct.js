/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/updateProducts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleName = e => {
        const updatedName = e.target.value;
        /* others System */
        // const updatedName= {...product}
        // updateProduct.name = updatedName;
        // setProduct(updateProduct)
        const updateProduct = { name: updatedName, image: product.image, price: product.price, categories: product.categories, description: product.description }
        setProduct(updateProduct);
    };

    const handleImage = e => {
        const updatedImage = e.target.value;
        const updateProduct = { name: product.name, image: updatedImage, price: product.price, categories: product.categories, description: product.description }
        setProduct(updateProduct);
    };

    const handlePrice = e => {
        const updatedPrice = e.target.value;
        const updateProduct = { name: product.name, image: product.image, price: updatedPrice, categories: product.categories, description: product.description }
        setProduct(updateProduct);
    };
    const handleCategories = e => {
        const updatedCategories = e.target.value;
        const updateProduct = { name: product.name, image: product.image, price: product.price, categories: updatedCategories, description: product.description }
        setProduct(updateProduct);
    };
    const handleDescription = e => {
        const updatedDescription = e.target.value;
        const updateProduct = { name: product.name, image: product.image, price: product.price, categories: product.categories, description: updatedDescription }
        setProduct(updateProduct);
    };
    const handleProductsUpdate = e => {
        e.preventDefault();
        fetch(`http://localhost:5000/updateProducts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    return (
        <>
            <Container>
                <p className="text-danger topMargin" >PRODUCT UPDATE JUNO TOYS & GAMES</p>
                <h2 className="all-heading">Product Update</h2>
                <h3>{product?.name}</h3>
                <hr />
                <Row xs={1} md={2} className="d-flex align-items-center">
                    <Col>
                        <img className="img-fluid w-75" src={product?.image} alt="" />
                        <h4>Price: ${product?.price}</h4>
                        <h5>Categories: {product?.categories}</h5>
                        <p>Description: {product?.description}</p>
                    </Col>
                    <Col>
                        <form onSubmit={handleProductsUpdate} className="mx-auto py-3 add-product">
                            <input type="text" onChange={handleName} value={product?.name || ''} />
                            <input type="text" onChange={handleImage} placeholder="Product Image Url" />
                            <input type="text" onChange={handlePrice} value={product?.price || ''} />
                            <input type="text" onChange={handleCategories} value={product?.categories || ''} />
                            <textarea type="text" onChange={handleDescription} value={product?.description || ''} />
                            <Button type="submit" variant="btn btn-outline-success"><i className="fas fa-wrench"></i> Product Update</Button>
                        </form>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    );
};

export default UpdateProduct;

/*
toast.success("Update Product", {
position: "top-center",
});
*/