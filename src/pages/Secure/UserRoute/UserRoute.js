import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const UserRoute = ({ children, ...rest }) => {
  const { admin, loading } = useAuth();
  if (loading) {
    return (
      <Spinner animation="border" variant="success" className="spinnerSize" />
    );
  }
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          !admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default UserRoute;
