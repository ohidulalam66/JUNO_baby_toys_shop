import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import MyOrdersTable from '../MyOrdersTable/MyOrdersTable';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch("https://thawing-beach-22228.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);

    const handleDeleteOrder = id => {
        // const proceed = toast.success("Are you sure, you want to your client order Delete?");
        // if (proceed) {
        const url = `https://thawing-beach-22228.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Canceled SuccessFully", {
                        position: "top-center",
                    });
                    const remainingOrder = myOrders.filter(user => user._id !== id);
                    setMyOrders(remainingOrder);
                };
            });
        // };
    };

    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MY ORDERS JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">My Orders</h2>
                <Table responsive="sm" bordered className="mt-5">
                    <thead className="table-header">
                        <tr>
                            <th>Product</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Shipping Charge</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {
                            myOrders.filter(order => order.email === user.email).map(myOrder =>
                                <MyOrdersTable
                                    key={myOrder._id}
                                    myOrder={myOrder}
                                    handleDeleteOrder={handleDeleteOrder}
                                >
                                </MyOrdersTable>
                            )
                        }
                    </tbody>
                </Table>
                <ToastContainer />
            </Container>
        </>
    );
};

export default MyOrders;

/*

*/