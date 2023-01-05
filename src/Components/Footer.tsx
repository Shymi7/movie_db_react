import React from "react";
import {Navbar} from "react-bootstrap";


export const Footer:React.FC = () =>{
    return (
        <Navbar bg="dark" variant="dark" className='h1 w-100 fixed-bottom my-0'>
            <p>This is my footer</p>
        </Navbar>
    );
}