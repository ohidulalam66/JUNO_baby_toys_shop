import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomerReview from '../CustomerReview/CustomerReview';
// import ReactStars from "react-rating-stars-component";


const CustomerReviews = () => {
    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(() => {
        const url = "https://thawing-beach-22228.herokuapp.com/reviews";
        fetch(url)
            .then(res => res.json())
            .then(data => setCustomerReviews(data.slice(0, 6)))
    }, [])

    return (
        <>
            <div className="PopularStore-bg">
                <Container>
                    <p className="text-danger pt-5" >CUSTOMER REVIEW JUNO TOYS &  GAMES</p>
                    <h2 className="all-heading">Customer Review</h2>
                    <Row xs={1} sm={2} md={3} className="g-4 py-5">
                        {
                            customerReviews.map(customerReview =>
                                <CustomerReview
                                    key={customerReview._id}
                                    customerReview={customerReview}
                                >
                                </CustomerReview>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default CustomerReviews;