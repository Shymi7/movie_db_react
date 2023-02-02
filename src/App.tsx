import React from 'react';
import './Styles/style.css';
import {NavBar} from "./Components/NavBar";


import {Outlet} from "react-router-dom";

export default function App() {


    const links = localStorage.getItem("userLoginData") !== null ?
        [
            {address: "moviesList", text: "Home"},
            {address: "addMovie", text: "Add movie"},
            {
                text: "Logout", fun: (): void => {
                    localStorage.clear();
                    window.location.reload();
                }
            },
        ] :
        [
            {address: "moviesList", text: "Home"},
            {address: "register", text: "Register"},
            {address: "login", text: "Login"},
        ];

    return (
        <div className={'d-flex flex-column justify-content-between'}>
            <NavBar links={links}/>
            <Outlet/>
        </div>

    );
}
