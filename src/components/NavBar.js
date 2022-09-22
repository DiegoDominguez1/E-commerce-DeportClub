import{ Container, Nav, NavBar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
    return (
        <NavBar bg="dark" variant="dark">
            <Container>
                <NavBar.Brand href="#home">
                    Tienda de Deportes
                </NavBar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#futbol">Fútbol</Nav.Link>
                    <Nav.Link href="#basket">Basketball</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </NavBar>
    )
}

export default NavBar;