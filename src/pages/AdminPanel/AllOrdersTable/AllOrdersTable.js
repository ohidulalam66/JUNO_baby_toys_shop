import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AllOrdersTable.css';

const AllOrdersTable = ({ order, handleDeleteOrder }) => {
    const { _id, productName, locationName, email, quantity, shipping } = order;

    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{locationName}</td>
                <td>{email}</td>
                <td>{quantity}</td>
                <td>{shipping}</td>
                <td className="d-flex justify-content-center  align-items-center">
                    <Form.Select size="sm">
                        <option className="text-danger">Pending</option>
                        <option className="text-success">Shipped</option>
                    </Form.Select>
                    <Button onClick={() => handleDeleteOrder(_id)} className="ms-2" variant="outline-danger"><i className="fas fa-trash-alt"></i></Button></td>
            </tr>
        </>
    );
};

export default AllOrdersTable;