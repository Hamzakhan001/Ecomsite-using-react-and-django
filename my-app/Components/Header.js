import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/"  >
      
    <Navbar.Brand >Navbar</Navbar.Brand>
    </LinkContainer>
    <Nav className="me-auto">
      <LinkContainer to='/home'>
      <Nav.Link  ><i className="fas fa-shopping-cart"></i>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/features'>
      <Nav.Link ><i className="fas fa-user"></i>Features</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/pricing'>
      <Nav.Link >Pricing</Nav.Link>
      </LinkContainer>
     
    </Nav>
    
    </Container>
    
  </Navbar>
        </div>
    )
}

export default Header
