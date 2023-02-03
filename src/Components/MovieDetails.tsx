import React, {useEffect, useState} from "react";
import {Alert, Card, Container} from "react-bootstrap";
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useJwt} from "react-jwt";

type MovieData = {
    title: string;
    content: string;
    image: string;
    id: string;
};


export const MovieDetails: React.FC = () => {
    const [movieData, setMovieData] = useState<null | MovieData>(null);

    const [isMovieDeleted, setIsMovieDeleted] = useState(false);


    const key = localStorage.getItem('userLoginData');
    const {decodedToken, isExpired} = useJwt(key || '');

    const {id} = useParams();
    useEffect(() => {

        axios.get('https://at.usermd.net/api/movies/' + id)
            .then((response: any) => {
                setMovieData(response.data)
            });
    }, [])


    return (
        movieData === null ?
            <></>
            :
            <Container className='my-4 d-flex border rounded border-dark overflow-hidden p-0 '>
                <Card.Img className='w-25' src={movieData.image}/>
                <Container className='w-50 mx-2 my-3 d-flex flex-column justify-content-start'>
                    <Card.Title>
                        <span>{movieData.title}</span>
                    </Card.Title>
                    <Card.Body>
                        {movieData.content}
                    </Card.Body>
                    {
                        // @ts-ignore
                        (decodedToken !== null && decodedToken.isAdmin && !isExpired && !isMovieDeleted) &&
                        <Button variant='secondary' onClick={() => {
                            axios.delete('https://at.usermd.net/api/movie/' + id)
                                .then((response: any) => {
                                    setIsMovieDeleted(true);
                                })
                        }}>
                            Usuń film
                        </Button>
                    }
                    {
                        isMovieDeleted &&
                        <Alert className={'w-100'} variant={'danger'}>
                            Film został usunięty
                        </Alert>
                    }
                </Container>



            </Container>
    );
}
