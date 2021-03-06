import React, { useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import "./Dashboard.css";
import { Switch, Link, useRouteMatch } from "react-router-dom";
import MyOrders from "../UserPanel/MyOrders/MyOrders";
import CheckOut from "../UserPanel/CheckOut/CheckOut";
import Review from "../UserPanel/Review/Review";
import ManageAllOrders from "../AdminPanel/ManageAllOrders/ManageAllOrders";
import ManageProducts from "../AdminPanel/ManageProducts/ManageProducts";
import AddProducts from "../AdminPanel/AddProducts/AddProducts";
import MakeAdmin from "../AdminPanel/MakeAdmin/MakeAdmin";
import useAuth from "../hooks/useAuth";
import AdminRoute from "../Secure/AdminRoute/AdminRoute";
import DashboardHome from "../DashboardHome/DashboardHome";
import UserRoute from "../Secure/UserRoute/UserRoute";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const { admin } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { path, url } = useRouteMatch();

  return (
    <>
      <DashboardHome handleShow={handleShow} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {admin ? (
            <h3 className="panel-heading">Admin Panel</h3>
          ) : (
            <h3 className="panel-heading">User Panel</h3>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {admin ? (
            <Stack gap={3}>
              <Link to={`${url}/manageAllOrders`}>
                <button className="dashboard-link">
                  <img
                    className="me-3 icon-img"
                    src="https://img.icons8.com/color/48/000000/select-all.png"
                    alt=""
                  />
                  Manage All Orders
                </button>
              </Link>

              <Link to={`${url}/manageProducts`}>
                <button className="dashboard-link">
                  <img
                    className="me-3 icon-img"
                    src="https://img.icons8.com/color/48/000000/products-pile.png"
                    alt=""
                  />
                  Manage Products
                </button>
              </Link>

              <Link to={`${url}/addProducts`}>
                <button className="dashboard-link">
                  <img
                    className="me-3 icon-img"
                    src="https://img.icons8.com/color/48/000000/add-product.png"
                    alt=""
                  />
                  Add Products
                </button>
              </Link>

              <Link to={`${url}/makeAdmin`}>
                <button className="dashboard-link">
                  <img
                    className="me-3 icon-img"
                    src="https://img.icons8.com/color/48/000000/verified-account.png"
                    alt=""
                  />
                  Make Admin
                </button>
              </Link>
              <img
                className="w-50 mt-4 mx-auto"
                src="https://i.im.ge/2021/11/10/oYTSXP.png"
                alt=""
              />
            </Stack>
          ) : (
            <Stack gap={3}>
              <Link to={`${url}/myOrders`}>
                <button className="dashboard-link">
                  <img
                    className="me-3 icon-img"
                    src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png"
                    alt=""
                  />
                  My Orders
                </button>
              </Link>

              <Link to={`${url}/checkOut`}>
                <button className="dashboard-link">
                  <img
                    className="me-3 icon-img"
                    src="https://img.icons8.com/color/48/000000/take-out.png"
                    alt=""
                  />
                  Check Out
                </button>
              </Link>

              <Link to={`${url}/review`}>
                <button className="dashboard-link">
                  <img
                    className="me-3 icon-img"
                    src="https://img.icons8.com/color/48/000000/satisfied.png"
                    alt=""
                  />
                  Review
                </button>
              </Link>
              <img
                className="w-50 mt-4 mx-auto"
                src="https://i.im.ge/2021/11/10/oYTSXP.png"
                alt=""
              />
            </Stack>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      {/* user panel */}
      <Switch>
        <UserRoute path={`${path}/myOrders`}>
          <MyOrders />
        </UserRoute>
        <UserRoute path={`${path}/checkOut`}>
          <CheckOut />
        </UserRoute>
        <UserRoute path={`${path}/review`}>
          <Review />
        </UserRoute>
        {/* Admin panel */}
        <AdminRoute path={`${path}/manageAllOrders`}>
          <ManageAllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts />
        </AdminRoute>
        <AdminRoute path={`${path}/addProducts`}>
          <AddProducts />
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </AdminRoute>
      </Switch>
    </>
  );
};
//

export default Dashboard;
