import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export const AddMovie: React.FC = () => {
    return (

        <div className={"login-container d-flex justify-content-center"}>
            <Form className={"w-25 my-5"}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter name of the movie</Form.Label>
                    <Form.Control type="name"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter year of production</Form.Label>
                    <Form.Control type="year"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Who is the director</Form.Label>
                    <Form.Control type="director"/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Add movie
                </Button>
            </Form>
        </div>
    );
}