import React, {ChangeEvent, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";


export const Login:React.FC = () =>{
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')

    function sendForm(): void {
        axios.post('https://at.usermd.net/api/user/auth', {
            'login': login,
            'password': password
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className={"login-container d-flex justify-content-center"}>
            <Form className={"w-25 my-5"}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setLogin(e.target.value);
                    }} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }} type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={sendForm} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </div>

    );
}
