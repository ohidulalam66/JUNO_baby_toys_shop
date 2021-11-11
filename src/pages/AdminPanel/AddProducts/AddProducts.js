import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleProductsAdd = data => {
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Product Added");
                    reset();
                }
            })
    };
    return (
        <>
            <p className="topMargin text-danger" >ADD PRODUCTS JUNO TOYS &  GAMES</p>
            <h2 className="all-heading">Add Products</h2>
            <Container>
                <form onSubmit={handleSubmit(handleProductsAdd)} className="mx-auto w-50 py-3">
                    <input {...register("name")} placeholder="Product Name" />
                    <input {...register("image")} placeholder="Product Image URL" />
                    <input {...register("price")} placeholder="Price" />
                    <input {...register("categories")} placeholder="Categories" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="submit" value="Add Products" className="btn-link" />
                </form>
            </Container>
        </>
    );
};

export default AddProducts;