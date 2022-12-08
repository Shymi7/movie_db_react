import React from "react";
import {Card, Container, Image} from "react-bootstrap";

import moviePlaceholder from "../Images/movie-placeholder.png";

// interface Props {
//     title: string,
//     rating: number,
//     reviewCount: number,
//     genre: string,
//     director: string,
//     img: string,
// }

type MovieData = {
    title: string;
    director: string;
    rating: number;
    reviewCount: number;
    year: number;
};

export const Movie: React.FC<{ data: MovieData }> = ({ data }) => {

    return(
        <Container className='my-4 d-flex'>
            <Card.Img className='w-25' src={moviePlaceholder}/>
            <Container className='w-50 mx-2 my-3'>
                <Card.Title>
                    <span>{data.title}</span>
                    <span className='font-color-grey-light'> ({data.year})</span>
                </Card.Title>
                <Card.Body>
                    Director: {data.director}
                </Card.Body>
            </Container>
            <Container className='w-25 d-flex flex-column justify-content-center'>
                <h3>{data.rating}</h3><br/>
                <span className='font-color-grey-light'>{data.reviewCount}</span>
            </Container>

        </Container>
    );
}
