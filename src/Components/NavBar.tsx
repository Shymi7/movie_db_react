import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap'

import { Link } from "react-router-dom";

interface LinkContent {
    address: string;
    text: string;
}

interface Props {
    links: LinkContent[];
}

export const NavBar: React.FC<Props> = ({links}) => {
    const linkElements = links.map((link) => {
        return (
            <Nav.Item  key={link.address}>
                <Link className={"nav-link"} to={link.address}>
                    {link.text}
                </Link>

            </Nav.Item>

            // <Link to={link.address} key={link.address}>
            //{link.text}
            // </Link>
        );
    });

    return (
        <Navbar bg="dark" variant="dark" className='d-flex justify-content-end'>
            <Container className='wi'>
                <Navbar.Brand>
                    <Link className={"nav-link"} to="moviesList">
                        Movie DB
                    </Link>
                </Navbar.Brand>
            </Container>
            <Container className='w-25'>
                <Nav className="me-auto">
                    {linkElements}

                </Nav>
            </Container>
        </Navbar>
    );
}
