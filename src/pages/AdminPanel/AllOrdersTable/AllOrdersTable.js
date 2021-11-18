import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AllOrdersTable.css';

const AllOrdersTable = ({ order, handleDeleteOrder }) => {
    const { _id, productName, locationName, email, quantity, shipping, status } = order;

    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{locationName}</td>
                <td>{email}</td>
                <td>{quantity}</td>
                <td>{shipping}</td>
                <td className="d-flex justify-content-center  align-items-center">
                    <select className="w-100">
                        <option className="text-danger">{status}</option>
                        <option className="text-success">Is Going</option>
                        <option className="text-success">Shipped</option>
                    </select>
                    <Button onClick={() => handleDeleteOrder(_id)} className="ms-2" variant="outline-danger"><i className="fas fa-trash-alt"></i></Button></td>
            </tr >
        </>
    );
};

export default AllOrdersTable;