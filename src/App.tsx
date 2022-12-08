import React from 'react';
import './Styles/style.css';
import {NavBar} from "./Components/NavBar";
import {MoviesList} from "./Components/MoviesList";
import {Footer} from "./Components/Footer";

function App() {
  return (
    <div>
        <NavBar/>
        <MoviesList/>
        <Footer/>
    </div>
  );
}

export default App;
