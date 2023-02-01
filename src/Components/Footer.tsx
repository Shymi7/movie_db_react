import React from "react";
import {Card, Navbar} from "react-bootstrap";


export const Footer:React.FC = () =>{
    return (
        <Navbar bg="dark" variant="dark" className='h1 w-100 align-self-end'>

            <p>This is my footer</p>
        </Navbar>
        // <Card.Footer>2 days ago</Card.Footer>
    );
}
