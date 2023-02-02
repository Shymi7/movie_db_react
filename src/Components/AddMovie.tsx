import React, {ChangeEvent, useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Alert} from "react-bootstrap";

export const AddMovie: React.FC = () => {
    const [errorDisplay, setErrorDisplay] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    const [name, setName] = useState('');
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        validateForm();
    })

    function validateForm(): void {
        const minNameLength = 2;
        const minDescriptionLength = 20;

        setIsFormValid(false);

        //break if all inputs are empty
        if (name === '' && url === '' && description === '')
            return;

        //name validation
        if (name.length < minNameLength) {
            setErrorDisplay('Nazwa filmu musi mieć minimum ' + minNameLength + ' znaki.');
            return;
        }

        //description validation
        if (description.length <= minDescriptionLength) {
            setErrorDisplay('Opis filmu musi mieć minumum ' + minDescriptionLength + ' znaków.');
            return;
        }


        setErrorDisplay('');
        setIsFormValid(true);
    }


    const sendForm = (e: React.FormEvent): void => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string };
            image: { value: string };
            content: { value: string };
        };

        axios.post('https://at.usermd.net/api/movies', {
            title: target.title.value,
            image: target.image.value,
            content: target.content.value
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={"d-flex flex-column align-items-center justify-content-center"}>
            <Form onSubmit={sendForm} className={"w-25 my-5"}>
                <Form.Group className="mb-3">
                    <Form.Label>Wpisz nazwę filmu</Form.Label>
                    <Form.Control type="text" name={'name'}
                                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                      setName(e.target.value);
                                  }}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Wpisz opis filmu</Form.Label>
                    <Form.Control type="text" name={'content'}
                                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                      setDescription(e.target.value);
                                  }}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Wklej link do obrazka</Form.Label>
                    <Form.Control type="text" name={'image'}
                                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                      setUrl(e.target.value);
                                  }}/>
                </Form.Group>

                {
                    isFormValid ?
                        <Button onClick={sendForm} variant="primary" type="button">
                            Dodaj film
                        </Button> :
                        <Button variant="primary" type="button" disabled>
                            Dodaj film
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
