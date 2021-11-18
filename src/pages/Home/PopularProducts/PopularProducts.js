import React, { useEffect, useState } from 'react';
import './PopularProducts.css';
import { Container, Row } from 'react-bootstrap';
import PopularProduct from '../PopularProduct/PopularProduct';

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const url = "https://thawing-beach-22228.herokuapp.com/products";
        fetch(url)
            .then(res => res.json())
            .then(data => setPopularProducts(data.slice(0, 6)))
    }, []);

    return (
        <>
            <div className="PopularStore-bg">
                <Container>
                    <p className="text-danger pt-5" >POPULAR PRODUCT JUNO TOYS &  GAMES</p>
                    <h2 className="all-heading">Popular In Store</h2>
                    <Row xs={1} sm={2} md={3} className="g-4 py-5 mb-5">
                        {
                            popularProducts.map(popularProduct =>
                                <PopularProduct
                                    key={popularProduct._id}
                                    popularProduct={popularProduct}
                                >
                                </PopularProduct>
                            )
                        }
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default PopularProducts;