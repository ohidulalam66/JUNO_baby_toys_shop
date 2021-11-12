import React from 'react';
import { Button } from 'react-bootstrap';
import './AllOrdersTable.css';

const AllOrdersTable = ({ order, handleDeleteOrder }) => {
    const { _id, productName, locationName, email, quantity, shipping } = order;
    console.log(_id)
    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{locationName}</td>
                <td>{email}</td>
                <td>{quantity}</td>
                <td>{shipping}</td>
                <td className="d-flex justify-content-center  align-items-center"><Button variant="outline-warning">Pending</Button> <Button onClick={() => handleDeleteOrder(_id)} variant="outline-danger"><i className="fas fa-trash-alt"></i></Button></td>
            </tr>
        </>
    );
};

export default AllOrdersTable;