import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HpCloud</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/register">Register</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Headers