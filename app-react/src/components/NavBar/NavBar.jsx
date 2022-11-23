import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBarBoost() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="../src/assets/cursor.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="ClickReactJS logo"
            />
          </Navbar.Brand>
        <Navbar.Brand href="#home">ClickerReactJS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#1">Clickeable 1</Nav.Link>
            <Nav.Link href="#2">Clickeable 2</Nav.Link>
            <Nav.Link href="#3">Clickeable 3</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget itemsCount='2' />          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoost;