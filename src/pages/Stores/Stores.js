import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Store from '../Store/Store';
import './Stores.css';

const Stores = () => {
    const [storeProducts, setStoreProducts] = useState([]);

    useEffect(() => {
        const url = "https://thawing-beach-22228.herokuapp.com/products";
        fetch(url)
            .then(res => res.json())
            .then(data => setStoreProducts(data.slice(6)))
    }, []);
    return (
        <>
            <div className="PopularStore-bg">
                <p className="text-danger topMargin" >IN STORE JUNO TOYS & GAMES</p>
                <h2 className="all-heading">In Store</h2>
                <Container>
                    <Row xs={1} md={3} className="g-4 py-5">
                        {
                            storeProducts.map(storeProduct =>
                                <Store
                                    key={storeProduct._id}
                                    storeProduct={storeProduct}
                                >
                                </Store>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Stores;