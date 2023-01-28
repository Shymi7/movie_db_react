import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


export const AddMovie: React.FC = () => {

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
        <div className={"login-container d-flex justify-content-center"}>
            <Form onSubmit={sendForm} className={"w-25 my-5"}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter name of the movie</Form.Label>
                    <Form.Control type="text" name={'name'}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter image URL</Form.Label>
                    <Form.Control type="text" name={'image'}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter description</Form.Label>
                    <Form.Control type="text" name={'content'}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add movie
                </Button>
            </Form>
        </div>
    );
}
