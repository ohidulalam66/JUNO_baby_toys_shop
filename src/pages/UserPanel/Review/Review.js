import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Review.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const handleReviewAdd = data => {
        fetch('https://thawing-beach-22228.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success("Review Added", {
                        position: "top-center",
                    });
                    reset();
                }
            })
    };

    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MY REVIEW JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">My Review</h2>
                <form onSubmit={handleSubmit(handleReviewAdd)} className="mx-auto w-50 py-3 add-product">
                    <input {...register("name")} disabled defaultValue={user.displayName} />
                    <input {...register("email")} disabled defaultValue={user.email} />
                    <textarea {...register("review")} placeholder="Your Comment" />
                    <Button type="submit" variant="outline-success"><i className="fas fa-comment-dots"></i> Review</Button>
                </form>
                <ToastContainer />
            </Container>
        </>
    );
};

export default Review;