import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Menu = () =>{
    return(
        <Navbar className="bg-body-tertiary fixed-top ">
      <Container>
        <Navbar.Brand href="/home">ToDo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav  id='nav' >
                <Nav.Link href="/home">Mis Tareas</Nav.Link>
                <Nav.Link href="/historial">Historial</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    
}

export default Menu;