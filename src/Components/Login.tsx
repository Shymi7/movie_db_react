import React, {ChangeEvent, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Alert} from "react-bootstrap";


export const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [errorDisplay, setErrorDisplay] = useState('');

    const navigate = useNavigate();

    function sendForm(): void {
        axios.post('https://at.usermd.net/api/user/auth', {
            'login': login,
            'password': password
        })
            .then(function (response) {
                //console.log(response.data);
                localStorage.setItem("userLoginData", JSON.stringify({login, password}));

                navigate('/moviesList');
                //redirect('/addMovie');
                window.location.reload();
            })
            .catch(function (error) {
                setErrorDisplay('Logowanie nie powiodło się.')
                //console.log(error);
            });
        //console.log('asdfasd');
    }


    return (
        <div className={"d-flex flex-column align-items-center justify-content-center"}>
            <Form className={"w-25 my-5"}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setLogin(e.target.value);
                    }} type="text" placeholder="Wpisz login"/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }} type="password" placeholder="Wpisz hasło"/>
                </Form.Group>

                <Button onClick={sendForm} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
            {
                errorDisplay !== '' &&
                <Alert className={'w-25'} variant={'warning'}>
                    {errorDisplay}
                </Alert>
            }
        </div>

    );
}
