import React from 'react';
import { Button } from 'react-bootstrap';
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
                <td><Button disabled variant="outline-warning">Pending</Button> <Button onClick={() => handleDeleteOrder(_id)} variant="outline-danger"><i className="fas fa-trash-alt"></i></Button></td>

            </tr>
        </>
    );
};

export default AllOrdersTable;