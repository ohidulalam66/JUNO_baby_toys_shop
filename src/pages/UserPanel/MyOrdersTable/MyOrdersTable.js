import React from 'react';
import { Button } from 'react-bootstrap';
import './MyOrdersTable.css';

const MyOrdersTable = ({ myOrder, handleDeleteOrder }) => {
    const { _id, productName, price, quantity, shipping } = myOrder;
    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{shipping}</td>
                <td className="d-flex justify-content-center  align-items-center"><Button disabled variant="outline-warning">Pending</Button><Button onClick={() => handleDeleteOrder(_id)} variant="outline-danger"><i className="fas fa-trash-alt"></i></Button></td>
            </tr>
        </>
    );
};

export default MyOrdersTable;