import React from 'react';
import './Styles/style.css';
import {NavBar} from "./Components/NavBar";
import {Footer} from "./Components/Footer";


import {Outlet} from "react-router-dom";

export default function App() {
  return (
      <div>
          <NavBar links={[
              // {address: "/", text: "Home"},
              {address: "moviesList", text: "Home"},
              {address: "register", text: "Register"},
              {address: "login", text: "Login"},
              {address: "addMovie", text: "Add movie"},
          ]}/>
          <Outlet />
          <Footer/>


      </div>

  );
}
