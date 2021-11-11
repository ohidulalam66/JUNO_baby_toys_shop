import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Store from './pages/Store/Store';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Secure/Login/Login';
import Register from './pages/Secure/Register/Register';
import AuthProvider from './pages/Shared/context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Secure/PrivateRoute/PrivateRoute';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/store">
                            <Store />
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div >
    );
}

export default App;
