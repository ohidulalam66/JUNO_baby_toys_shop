import React, { useState, useEffect } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import AllOrdersTable from '../AllOrdersTable/AllOrdersTable';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure, you want to your client order Delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Canceled SuccessFully")
                        const remainingOrder = orders.filter(user => user._id !== id);
                        setOrders(remainingOrder);
                    };
                });
        };
    };

    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MANAGE ALL ORDERS JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">Manage All Orders</h2>
                <Row>
                    <Col>
                        <Table responsive="sm" bordered className="mt-5">
                            <thead className="table-header">
                                <tr>
                                    <th>Product</th>
                                    <th>Product Price</th>
                                    <th>Customer Email</th>
                                    <th>Product Quantity</th>
                                    <th>Product Shipping</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {
                                    orders.map(order =>
                                        <AllOrdersTable
                                            key={order._id}
                                            order={order}
                                            handleDeleteOrder={handleDeleteOrder}
                                        >
                                        </AllOrdersTable>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ManageAllOrders;


/*

*/