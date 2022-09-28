import React, { useState, useEffect } from "react";

//import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
const API_URL = 'http://www.omdbapi.com?apikey=e8452209'

const App = () => {
  
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('superman');
    }, []);
    
    return(
        <div className="app">
            <h1>김정효 잘잔다zzzzzz</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={()=>{}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <





        </div>
    );
    
}
  
  export default App;