import React, { useRef } from 'react';
import { Container, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Review.css';
// import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Review = () => {
    const { user } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();
    const starRef = useRef();


    const handleReviewAdd = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const comment = commentRef.current.value;
        const star = starRef.current.value;

        const addNewReview = { name, email, comment, star };

        fetch('https://thawing-beach-22228.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewReview)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success("Review Added", {
                        position: "top-center",
                    });
                    e.target.reset();
                }
            })
        e.preventDefault();
    };

    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MY REVIEW JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">My Review</h2>
                <form onSubmit={handleReviewAdd} className="mx-auto w-50 py-3 add-product">
                    <input disabled defaultValue={user.displayName} ref={nameRef} />
                    <input disabled defaultValue={user.email} ref={emailRef} />
                    <input type="text" placeholder="Comment" ref={commentRef} />
                    <select className="form-select" id="inputGroupSelect01" ref={starRef}>
                        <option className="text-success" value="5">Excellent(5-core)</option>
                        <option className="text-success" value="4.5">(4.5-core)</option>
                        <option className="text-success" value="4">Awesome(4-core)</option>
                        <option className="text-success" value="3.5">(3.5-core)</option>
                        <option className="text-success" value="3">Great(3-core)</option>
                        <option className="text-success" value="2.5">(2.5-core)</option>
                        <option className="text-success" value="2">Thank full(2-core)</option>
                        <option className="text-success" value="1.5">(1.5-core)</option>
                        <option className="text-success" value="1">Good(1-core)</option>
                        <option className="text-success" value="0">(0-core)</option>
                    </select>
                    <Button className="mt-3" type="submit" variant="outline-success"><i className="fas fa-comment-dots"></i> Review</Button>
                </form>
                <ToastContainer />
            </Container>
        </>
    );
};

export default Review;