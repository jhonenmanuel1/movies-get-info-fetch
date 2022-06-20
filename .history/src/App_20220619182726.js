import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import'./App.css';
import MovieList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=$ari&apikey=263d22d8`;
    const response = await  fetch(url);
    const responseJson = await response.json();
    console.log(responseJson)
  }
 useEffect(()={
    getMovies();
 })
  return (
    <>
      <div className="movie-app">
        <div className="list ">
        <MovieList movies={movies}/>

        </div>
        
      </div>
    </>
  );
};

export default App;
