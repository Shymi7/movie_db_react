import React from 'react';
import './Styles/style.css';
import {NavBar} from "./Components/NavBar";


import {Outlet} from "react-router-dom";

export default function App() {


    const links = localStorage.getItem("userLoginData") !== null ?
        [
            {address: "moviesList", text: "Lista filmów"},
            {address: "addMovie", text: "Dodaj film"},
            {
                text: "Wyloguj się", fun: (): void => {
                    localStorage.clear();
                    window.location.reload();
                }
            },
        ] :
        [
            {address: "moviesList", text: "Lista filmów"},
            {address: "register", text: "Zarejestruj się"},
            {address: "login", text: "Zaloguj się"},
        ];

    return (
        <div className={'d-flex flex-column justify-content-between'}>
            <NavBar links={links}/>
            <Outlet/>
        </div>

    );
}
