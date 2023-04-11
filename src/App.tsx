import React from 'react';
import './Styles/style.css';
import {NavBar} from "./Components/NavBar";


import {Outlet} from "react-router-dom";

export default function App() {


    const links = localStorage.getItem("userLoginData") !== null ?
        [
            {address: "moviesList", text: "Movie DB"},
            {address: "addMovie", text: "Add Movie"},
            {
                text: "Log out", fun: (): void => {
                    localStorage.clear();
                    window.location.reload();
                }
            },
        ] :
        [
            {address: "moviesList", text: "Movies list"},
            {address: "register", text: "Sign in"},
            {address: "login", text: "Log in"},
        ];

    return (
        <div className={'d-flex flex-column justify-content-between'}>
            <NavBar links={links}/>
            <Outlet/>
        </div>

    );
}
