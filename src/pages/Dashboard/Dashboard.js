import React, { useState } from 'react';
import { Offcanvas, Stack, Button } from 'react-bootstrap';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../UserPanel/MyOrders/MyOrders';
import CheckOut from '../UserPanel/CheckOut/CheckOut';
import Review from '../UserPanel/Review/Review';
import ManageAllOrders from '../AdminPanel/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../AdminPanel/ManageProducts/ManageProducts';
import AddProducts from '../AdminPanel/AddProducts/AddProducts';
import MakeAdmin from '../AdminPanel/MakeAdmin/MakeAdmin';


const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();

    return (
        <>
            <Button variant="success" className="main-dashboard-link me-auto topMargin" onClick={handleShow}><i className="fas fa-arrow-left hover-icon"></i> Open Drawer</Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {/* user panel */}
                    <h3 className="panel-heading">User Panel</h3>
                    {/* admin panel */}
                    {/* <h3 className="panel-heading">Admin Panel</h3> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* user panel */}
                    <Stack gap={3}>
                        <Link to={`${url}/myOrders`}><button className="dashboard-link">My Orders</button></Link>
                        <Link to={`${url}/checkOut`}><button className="dashboard-link">Check Out</button></Link>
                        <Link to={`${url}/review`}><button className="dashboard-link">Review</button></Link>
                    </Stack>
                    <br />
                    {/* admin panel */}
                    <Stack gap={3}>
                        <Link to={`${url}/manageAllOrders`}><button className="dashboard-link">Manage All Orders</button></Link>
                        <Link to={`${url}/manageProducts`}><button className="dashboard-link">Manage Products</button></Link>
                        <Link to={`${url}/addProducts`}><button className="dashboard-link">Add Products</button></Link>
                        <Link to={`${url}/makeAdmin`}><button className="dashboard-link">Make Admin</button></Link>
                        <img className="w-50 mx-auto" src="https://i.im.ge/2021/11/10/oYTSXP.png" alt="" />
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
            {/* user panel */}
            <Switch>
                <Route exact path={path}>
                    <MyOrders />
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders />
                </Route>
                <Route path={`${path}/checkOut`}>
                    <CheckOut />
                </Route>
                <Route path={`${path}/review`}>
                    <Review />
                </Route>
            </Switch>
            {/* admin panel */}
            <Switch>
                <Route exact path={path}>
                    <ManageAllOrders />
                </Route>
                <Route path={`${path}/manageAllOrders`}>
                    <ManageAllOrders />
                </Route>
                <Route path={`${path}/manageProducts`}>
                    <ManageProducts />
                </Route>
                <Route path={`${path}/addProducts`}>
                    <AddProducts />
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                </Route>
            </Switch>
        </>
    );
};
// 

export default Dashboard;