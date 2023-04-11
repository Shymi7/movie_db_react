import React, {useState} from "react";
import {Card, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


export type MovieData = {
    title: string;
    content: string;
    image: string;
    id: string;
};

export const Movie: React.FC<{ data: MovieData }> = ({data}) => {

    const [isMovieHighlighted, setIsMovieHighlighted] = useState(false);

    const defaultStyle = 'my-4 d-flex border rounded border-dark overflow-hidden p-0';
    const highlightedStyle = 'my-4 d-flex border rounded border-success border-4 overflow-hidden p-0';

    const navigate = useNavigate();

    const imageUrl = require(`../Images/${data.id}.png`);

    return (
        <Container className={isMovieHighlighted ? highlightedStyle : defaultStyle}
                   onClick={() => {
                       navigate('movieDetails/' + data.id)
                   }}
                   onMouseEnter={() => {
                       setIsMovieHighlighted(true);
                   }}
                   onMouseLeave={() => {
                       setIsMovieHighlighted(false);
                   }}
        >
            <Card.Img className='w-25' src={imageUrl}/>
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
