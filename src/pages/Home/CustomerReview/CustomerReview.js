import React from "react";
import { Card, Col } from "react-bootstrap";
import "./CustomerReview.css";
import Rating from "react-rating";

const CustomerReview = ({ customerReview }) => {
  const { name, email, comment, star } = customerReview;
  return (
    <>
      <Col>
        <Card className="product-card h-100">
          <Card.Body>
            <Card.Title>
              <h5>{name}</h5>
            </Card.Title>
            <Card.Text>
              <p className="customer-email">{email}</p>
              <p className="review-comment">{comment}</p>
              <Rating
                initialRating={star}
                className="star-rating"
                readonly
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomerReview;
