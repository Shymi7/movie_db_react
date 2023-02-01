import React, {useEffect, useState} from "react";
import {Card, Container} from "react-bootstrap";
import axios from "axios";

// type MovieData = {
//     title: string;
//     content: string;
//     image: string;
//     id:string;
// };

export const MovieDetails: React.FC<string> = (id:string) => {
    const [movieData, setMovieData] = useState(null)


    useEffect(()=>{
        axios.get('https://at.usermd.net/api/movies/'+id)
            .then((response: any)=>{
                setMovieData(response.data)
            })
    }, [])


    return(
        <Container className='my-4 d-flex border rounded border-dark overflow-hidden p-0'>
            {/*<Card.Img className='w-25' src={movieData.image}/>*/}
            {/*<Container className='w-50 mx-2 my-3'>*/}
            {/*    <Card.Title>*/}
            {/*        <span>{data.title}</span>*/}
            {/*    </Card.Title>*/}
            {/*    <Card.Body>*/}
            {/*        {data.content}*/}
            {/*    </Card.Body>*/}
            {/*</Container>*/}

        </Container>
    );
}
