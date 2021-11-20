import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();


    const handleMakeAdmin = data => {
        fetch('https://thawing-beach-22228.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.matchedCount) {
                    toast.success("Make Admin", {
                        position: "top-center",
                    });
                    reset();
                }
            })
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://thawing-beach-22228.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDeleteUser = id => {
        // const proceed = toast.success("Are you sure, you want to your client order Delete?");
        // if (proceed) {
        const url = `https://thawing-beach-22228.herokuapp.com/usersDelete/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Canceled SuccessFully", {
                        position: "top-center",
                    });
                    const remainingOrder = users.filter(user => user._id !== id);
                    setUsers(remainingOrder);
                };
            });
        // };
    };

    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MAKE ADMIN JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">Make Admin</h2>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={4}>
                        <form onSubmit={handleSubmit(handleMakeAdmin)} className="mx-auto w-100 py-3 add-product">
                            <input {...register("email")} placeholder="Email" />
                            <Button type="submit" variant="outline-success"><i className="fas fa-user-shield"></i> Make Admin</Button>
                        </form>
                    </Col>
                    <Col xs={12} md={8} className="mt-4">
                        <h2 className="text-success">Our User & Admin </h2>
                        <Table responsive="sm" bordered className="mt-5">
                            <thead className="table-header">
                                <tr>
                                    <th className="bg-danger">Role</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {
                                    users.map(user =>
                                        <tr key={user._id}>
                                            <td>{user?.role || "user"}</td>
                                            <td>{user?.displayName}</td>
                                            <td>{user?.email}</td>
                                            <td>
                                                <Button className="ms-2" onClick={() => handleDeleteUser(user?._id)} variant="outline-danger"><i className="fas fa-trash-alt"></i></Button>
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

export default MakeAdmin;