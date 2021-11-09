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

function App() {
    return (
        <div className="App">
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
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div >
    );
}

export default App;
