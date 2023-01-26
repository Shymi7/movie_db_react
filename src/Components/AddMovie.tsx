import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';




export const AddMovie: React.FC = () => {
    return (

        <div className={"login-container d-flex justify-content-center"}>
            <Form className={"w-25 my-5"}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter name of the movie</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter image URL</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter description</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Add movie
                </Button>
            </Form>
        </div>
    );
}
