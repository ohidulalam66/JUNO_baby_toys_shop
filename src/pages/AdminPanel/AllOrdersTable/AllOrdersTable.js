import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AllOrdersTable.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllOrdersTable = ({ order, handleDeleteOrder }) => {
    const { _id, productName, locationName, email, quantity, shipping, status } = order;

    const handleOption = (e, id) => {
        const updateStatus = e.target.value;
        let modifiedStatus = [];
        if (_id === id) {
            order.status = e.target.value;
        }
        modifiedStatus.push(order);
        const modifiedStatusProducts = { id, updateStatus };
        fetch('https://thawing-beach-22228.herokuapp.com/orders', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedStatusProducts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Order Status Change", {
                        position: "top-center",
                    });
                };
            })
    }
    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{locationName}</td>
                <td>{email}</td>
                <td>{quantity}</td>
                <td>{shipping}</td>
                <td className="d-flex justify-content-center  align-items-center">
                    <Form.Select size="md" defaultValue={status} onChange={(e) => handleOption(e, _id)} className="w-100">
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Shipped">Shipped</option>
                    </Form.Select>
                    <Button onClick={() => handleDeleteOrder(_id)} className="ms-2" variant="outline-danger"><i className="fas fa-trash-alt"></i></Button></td>
            </tr >
            <ToastContainer />
        </>
    );
};

export default AllOrdersTable;