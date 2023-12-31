import React from "react";
import './App.css';
import { useEffect, useState } from "react";
import SearchIcon from './search.svg';
//movie card jsx
import MovieCard from "./MovieCard";
//ec7e120b

const API_URL = 'http://www.omdbapi.com/?apikey=ec7e120b';
const App = () => { 
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
      
        setMovies(data.Search)
        
    };

    useEffect(()=>{
     
    },[]);

    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
            <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
            </div>
            {movies?.length > 0 ? (
                 <div className="container">
                     {movies.map((movie) => (
                      <MovieCard movies={movie} />
                     ))}
                 </div>
            ) : (
                 <div className="empty">
                    <h2>No movies found</h2>
                </div>
                )}
    
        </div>
    ); // movies.map iterates all of the fetched movies on the api 
}

export default App;