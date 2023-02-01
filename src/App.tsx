import React, {useEffect, useState} from 'react';
import './Styles/style.css';
import {NavBar} from "./Components/NavBar";
import {Footer} from "./Components/Footer";


import {Outlet} from "react-router-dom";

export default function App() {
    // const loginLink = localStorage.getItem("userLoginData") === null ?
    //     {address: "register", text: "Register"} :
    //     null;
    // const [isUserLogged, setIsUserLogged] = useState(
    //     localStorage.getItem('userLoginData') !== null
    // );


    // useEffect(() => {
    //     const handleStorage = (e: any) => {
    //         console.log(e.key);
    //         if (e.key === 'userLoginData') {
    //             setIsUserLogged(true);
    //         }
    //     };
    //
    //     window.addEventListener('storage', handleStorage);
    //
    //     return () => {
    //         window.removeEventListener('storage', handleStorage);
    //     };
    // }, []);


    const links = localStorage.getItem("userLoginData") !== null ?
        [
            // {address: "/", text: "Home"},
            {address: "moviesList", text: "Home"},
            {
                text: "Logout", fun: (): void => {
                    localStorage.clear();
                    window.location.reload();
                }
            },
            {address: "addMovie", text: "Add movie"},
        ] :
        [
            // {address: "/", text: "Home"},
            {address: "moviesList", text: "Home"},
            {address: "register", text: "Register"},
            {address: "login", text: "Login"},
            {address: "addMovie", text: "Add movie"},
        ];

    return (
        <div className={'d-flex flex-column justify-content-between'}>
            <NavBar links={links}/>
            <Outlet/>
            {/*<Footer/>*/}
        </div>

    );
}
