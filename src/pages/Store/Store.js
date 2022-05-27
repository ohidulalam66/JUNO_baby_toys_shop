import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Store.css";
import useAuth from "../hooks/useAuth";

const Store = ({ storeProduct }) => {
  const { _id, image, name, price } = storeProduct;
  const { admin } = useAuth();
  return (
    <>
      <Col>
        <Card className="product-card">
          <Card.Img className="product-img" variant="top" src={image} />
          <Card.Body>
            <Card.Title className="product-name">
              <h4>{name}</h4>
            </Card.Title>
            <Card.Text>
              <h5>${price}</h5>
            </Card.Text>
            {admin ? (
              <p>
                <i className="fas fa-wrench"></i> You are a Admin, Manage
                Products/ <span className="text-success">Update</span>!
              </p>
            ) : (
              <Link to={`/shop/${_id}`}>
                <Button variant="btn btn-outline-info">
                  <i className="fas fa-cart-plus"></i> Purchase
                </Button>
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Store;
