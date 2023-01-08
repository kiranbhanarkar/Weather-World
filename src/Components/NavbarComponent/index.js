import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavbarComponent() {
  return (
    // <Navbar bg="black" variant="dark" >
    //   <Container>
    //     <Navbar.Brand ><img style={{width:"30px", height:"30px"}} src='weather.png' alt=''></img> Weather World</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
            // <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            // <Nav.Link as={NavLink} to="/">SignUp</Nav.Link>
            // <Nav.Link as={NavLink} to="/Login">LogIn</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
<>
    {['lg'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3" bg="black" variant="dark">
        <Container fluid>
          <Navbar.Brand><img style={{width:"30px", height:"30px"}} src='weather.png' alt=''></img> Weather World</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} bg="black" variant="dark">
                Weather World
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/">SignUp</Nav.Link>
                <Nav.Link as={NavLink} to="/Login">LogIn</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>    
      
  )
}

export default NavbarComponent