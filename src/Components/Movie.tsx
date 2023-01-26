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

export type MovieData = {
    title: string;
    content: string;
    image: string;
    id:string;
};

export const Movie: React.FC<{ data: MovieData }> = ({ data }) => {

    return(
        <Container className='my-4 d-flex border rounded border-dark overflow-hidden p-0'>
            <Card.Img className='w-25' src={data.image}/>
            <Container className='w-50 mx-2 my-3'>
                <Card.Title>
                    <span>{data.title}</span>
                </Card.Title>
                <Card.Body>
                    {data.content}
                </Card.Body>
            </Container>

        </Container>
    );
}
