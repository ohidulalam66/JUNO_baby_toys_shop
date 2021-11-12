import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
            <Container className="my-4">
                <p className="text-danger mt-4" >ADD PRODUCTS JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">Add Products</h2>
                <form onSubmit={handleSubmit(handleProductsAdd)} className="mx-auto w-50 py-3 add-product">
                    <input {...register("name")} placeholder="Product Name" />
                    <input {...register("image")} placeholder="Product Image URL" />
                    <input {...register("price")} placeholder="Price" />
                    <input {...register("categories")} placeholder="Categories" />
                    <textarea {...register("description")} placeholder="Description" />
                    <Button type="submit" variant="success">Add Products</Button>
                </form>
            </Container>
        </>
    );
};

export default AddProducts;