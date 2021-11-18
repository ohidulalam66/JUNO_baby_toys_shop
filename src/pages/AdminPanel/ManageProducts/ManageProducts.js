import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import './ManageProducts.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        // const proceed = window.confirm("Are you sure, you want to your client order Delete?");
        // if (proceed) {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Product Canceled SuccessFully", {
                        position: "top-center",
                    });
                    const remainingOrder = manageProducts.filter(user => user._id !== id);
                    setManageProducts(remainingOrder);
                };
            });
        // };
    };

    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MANAGE PRODUCTS JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">Manage Products</h2>
                <Row>
                    <Col>
                        <Table responsive="sm" bordered className="mt-5">
                            <thead className="table-header">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product image</th>
                                    <th>Product Price</th>
                                    <th>Product Categories</th>
                                    <th>Product Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {
                                    manageProducts?.map(manageProduct =>
                                        <tr key={manageProduct._id}>
                                            <td>{manageProduct?.name}</td>
                                            <td><img className="w-50 img fluid" src={manageProduct?.image} alt="" /></td>
                                            <td>{manageProduct?.price}</td>
                                            <td>{manageProduct?.categories}</td>
                                            <td>{manageProduct?.description}</td>
                                            <td className="d-flex justify-content-center  align-items-center">
                                                <Link to={`/updateProducts/${manageProduct?._id}`}>
                                                    <Button className="ms-2" variant="outline-success"><i className="fas fa-wrench"></i></Button>
                                                </Link>
                                                <Button onClick={() => handleDeleteProduct(manageProduct?._id)} className="ms-2" variant="outline-danger"><i className="fas fa-trash-alt"></i></Button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    );
};

export default ManageProducts;