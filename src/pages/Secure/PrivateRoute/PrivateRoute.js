import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Spinner variant="danger" className="spinnerSize" animation="grow" />
    }
    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? (children)
                        :
                        (<Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                        )
                }
            />
        </>
    );
};

export default PrivateRoute;