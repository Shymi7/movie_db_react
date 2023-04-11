import React, {useEffect, useState} from "react";
import {Movie, MovieData} from "./Movie";
import {Container} from "react-bootstrap";
import {moviesRawData} from "../Data/moviesData";
import axios from "axios";

export function MoviesList(props: any) {

    const [moviesData, setMoviesData] = useState<MovieData[]>([]);

    useEffect(() => {
        setMoviesData(moviesRawData);
        // axios.get('https://at.usermd.net/api/movies')
        //     .then((response: any) => {
        //         setMoviesData(response.data)
        //     })
    }, [])

    const MoviesComponents = moviesData.map(movie => {
        return (
            <Movie key={movie.id} data={movie}/>
        )
    });
    return (
        <>
            <Container className="w-50">
                {MoviesComponents}
            </Container>
        </>

    );

}
