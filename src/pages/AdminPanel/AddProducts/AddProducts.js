import React from "react";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddProducts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleProductsAdd = (data) => {
    fetch("https://thawing-beach-22228.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("Add Product", {
            position: "top-center",
          });
          reset();
        }
      });
  };
  return (
    <>
      <Container className="my-4">
        <p className="text-danger mt-4">ADD PRODUCTS JUNO TOYS & GAMES</p>
        <h2 className="all-heading">Add Products</h2>
        <form
          onSubmit={handleSubmit(handleProductsAdd)}
          className="mx-auto w-50 py-3 add-product"
        >
          <input {...register("name")} placeholder="Product Name" />
          <input {...register("image")} placeholder="Product Image URL" />
          <input {...register("price")} placeholder="Price" />
          <input {...register("categories")} placeholder="Categories" />
          <textarea {...register("description")} placeholder="Description" />
          <Button type="submit" variant="btn btn-outline-success">
            <i className="fas fa-puzzle-piece"></i> Add Products
          </Button>
        </form>
        <ToastContainer />
      </Container>
    </>
  );
};

export default AddProducts;
