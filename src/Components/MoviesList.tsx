import React from "react";
import {Movie} from "./Movie";
import {Container} from "react-bootstrap";
import moviesData from "../Data/moviesData";

export function MoviesList(props: any) {
    const MoviesComponents = moviesData.map(movie => {
        return (
            <Movie key={movie.id} data={movie}/>
        )
    });
    return (
        <>
            <Container className="moviesList-title m-4">
                <h1>Movies List</h1>
            </Container>
            <Container className="w-50">
                {MoviesComponents}
            </Container>
        </>

    );

}