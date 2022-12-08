import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Navbar, Container, Nav} from "react-bootstrap";



export const NavBar:React.FC = () =>{
    return (
        <Navbar bg="dark" variant="dark" className='d-flex justify-content-end'>
            <Container className='wi'>
                <Navbar.Brand href="#home">Movie DB</Navbar.Brand>
            </Container>
            <Container className='w-25'>
                <Nav className="me-auto" >
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#features">Ranking</Nav.Link>
                    <Nav.Link href="#pricing">Search</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}