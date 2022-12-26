import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'


function NavbarComponent() {
  return (
    <Navbar bg="black" variant="dark" >
      <Container>
        <Navbar.Brand ><img style={{width:"30px", height:"30px"}} src='weather.png' alt=''></img> Weather World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/">SignUp</Nav.Link>
            <Nav.Link as={NavLink} to="/Login">LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent