import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar bg="light fixed-top" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        <img className="w-100" src="https://i.im.ge/2021/11/10/oYTSXP.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/store">Store</Nav.Link>
                        </Nav>
                        <Nav.Link as={HashLink} to="/dashboard" className="text-secondary" >Dashboard</Nav.Link>
                        <Nav.Link as={HashLink} className="text-secondary" to="/login">Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;