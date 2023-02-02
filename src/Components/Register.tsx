import React, {ChangeEvent, useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Alert} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const Register: React.FC = () => {

    const [errorDisplay, setErrorDisplay] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        validateForm();
    })

    function sendForm(): void {
        axios.post('https://at.usermd.net/api/user/create', {
            'name': login,
            'email': email,
            'password': password
        })
            .then(function (response) {
                localStorage.setItem("userLoginData", JSON.stringify({login, password}));
                navigate('/moviesList');
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function validateForm(): void {
        const minNameLength = 5;
        const minPasswordLength = 10;

        setIsFormValid(false);

        //break if all inputs are empty
        if (login === '' && email === '' && password === '' && repeatedPassword === '')
            return

        //login validation
        if (login.length < minNameLength) {
            setErrorDisplay('Login musi mieć minimum ' + minNameLength + ' znaków.');
            return;
        }
        if (!login.match(/^[A-Za-z0-9]*$/)) {
            setErrorDisplay('Login może składać się wyłącznie z liter i cyfr.');
            return;
        }

        //email validation
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            setErrorDisplay('Email jest nieprawidłowy');
            return;
        }

        //password validation
        if (password.length <= minPasswordLength) {
            setErrorDisplay('Hasło musi mieć minimum ' + minPasswordLength + ' znaków.');
            return;
        }
        if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,99}$/)) {
            setErrorDisplay('Hasło musi zawierać przynajmniej jedną wielką literę, cyfrę oraz znak specjalny.');
            return;
        }
        if (password !== repeatedPassword) {
            setErrorDisplay('Hasło nie zostało powtórzone poprawnie');
            return
        }

        setErrorDisplay('');
        setIsFormValid(true);
    }

    return (
        <div className={"d-flex flex-column align-items-center justify-content-center"}>
            <Form className={"w-25 my-5"}>
                <Form.Group className="mb-3">
                    <Form.Label>Login</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setLogin(e.target.value);
                    }} name={'name'} type="text" placeholder="Wpisz login"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                    }} name={'email'} type="email" placeholder="Wpisz email"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }} name={'password'} type="password" placeholder="Hasło"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Powtórz Hasło</Form.Label>
                    <Form.Control onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setRepeatedPassword(e.target.value);
                    }} name={'repeatedPassword'} type="password" placeholder="Hasło"/>
                </Form.Group>
                {
                    isFormValid ?
                        <Button onClick={sendForm} variant="primary" type="button">
                            Zarejestruj się
                        </Button> :
                        <Button variant="primary" type="button" disabled>
                            Zarejestruj się
                        </Button>
                }
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
