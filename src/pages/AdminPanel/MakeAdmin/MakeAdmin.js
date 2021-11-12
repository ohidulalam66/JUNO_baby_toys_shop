import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleMakeAdmin = data => {
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert("Make Admin");
                    reset();
                }
            })
    };
    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MAKE ADMIN JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">Make Admin</h2>
                <form onSubmit={handleSubmit(handleMakeAdmin)} className="mx-auto w-50 py-3 add-product">
                    <input {...register("email")} placeholder="Email" />
                    <Button type="submit" variant="outline-success"><i className="fas fa-user-shield"></i> Make Admin</Button>
                </form>
            </Container>
        </>
    );
};

export default MakeAdmin;