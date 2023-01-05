import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export const Register:React.FC = () =>{
    return (
        <div className={"login-container d-flex justify-content-center"}>
            <Form className={"w-25 my-5"}>
                <Form.Group className="mb-3">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="login" placeholder="Enter login" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control type="nickname" placeholder="Enter nickname" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}