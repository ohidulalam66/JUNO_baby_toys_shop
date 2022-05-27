import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Rating from "react-rating";
import "./Details.css";

const Details = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://thawing-beach-22228.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.slice(3)));
  }, []);
  return (
    <>
      <Container>
        <p className="text-danger topMargin">DISCOVER JUNO TOYS & GAMES</p>
        <h2 className="all-heading">Discover</h2>
        <h4 className="text-left mt-5 short-heading ">Reviews</h4>
        <Table responsive="sm" bordered>
          <thead className="table-header">
            <tr>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Comments</th>
              <th>Customer Stars</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {reviews
              .map((review) => (
                <tr key={review._id}>
                  <td>{review?.name}</td>
                  <td>{review?.email}</td>
                  <td>{review?.comment}</td>
                  <td>
                    <Rating
                      initialRating={review?.star}
                      className="star-rating"
                      readonly
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                    />
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </Table>
        <h4 className="text-left mt-5 short-heading">Our facilities</h4>
        <p>
          Specialty Toys Network has been providing website services for the toy
          industry for over 15 years. We’re experienced with the industry in
          ways the average design firm is not: The needs and goals of a toy
          store, toy manufacturer, toy distributor or rep group as well as the
          consumer. We are bringing these people together every day.Our design
          team will work with you to insure your brand presents your business in
          a positive, professional manner. That can mean simply converting
          existing branding elements into correctly sized and formatted web
          assets, or it can be the production of a flier, sign, new logo or
          entire brand identity for your business.We’ll build you a great
          website from start to finish. But we also realize you are invested in
          your current business software and hardware solutions, which may have
          it’s own unique requirements. Do you need extra services with custom
          connections? Let us know how we can help.Do you need your products in
          a digital format to allow your clients to easily use for populating
          their point of sale system or website? Perhaps you want to convert
          your catalog into a quality Google feed. That kind of digital geeky
          stuff is what we do every day here at Specialty Toys Network. We have
          developed tools and techniques to speed the process up as well as
          insure its integrity. Contact us and lets us know what your needs are.
        </p>
      </Container>
    </>
  );
};

export default Details;
