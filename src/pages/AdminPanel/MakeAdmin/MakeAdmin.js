import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
    return (
        <>
            <Container className="my-4">
                <p className="text-danger" >MAKE ADMIN JUNO TOYS &  GAMES</p>
                <h2 className="all-heading">Make Admin</h2>
                <form onSubmit={handleSubmit(handleMakeAdmin)} className="mx-auto w-50 py-3 add-product">
                    <input {...register("email")} placeholder="Email" />
                    <Button type="submit" variant="outline-success"><i className="fas fa-user-shield"></i> Make Admin</Button>
                </form>
                <ToastContainer />
            </Container>
        </>
    );
};

export default MakeAdmin;