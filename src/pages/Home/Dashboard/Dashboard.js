import React, { useState } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../../UserPanel/MyOrders/MyOrders';
import CheckOut from '../../UserPanel/CheckOut/CheckOut';
import Review from '../../UserPanel/Review/Review';


const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();

    return (
        <>
            <div className="topMargin">
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <img src="https://i.im.ge/2021/11/10/oYTSXP.png" alt="" />
                        <h3 className="panel-heading">User Panel</h3>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Stack gap={3}>
                            <Link to={`${url}/myOrders`}><button className="dashboard-link">My Orders</button></Link>
                            <Link to={`${url}/checkOut`}><button className="dashboard-link">Check Out</button></Link>
                            <Link to={`${url}/review`}><button className="dashboard-link">Review</button></Link>
                        </Stack>
                    </Offcanvas.Body>
                </Offcanvas>
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
                <button className="main-dashboard-link my-5" onClick={handleShow}>Open Drawer</button>
            </div>
        </>
    );
};
// 

export default Dashboard;