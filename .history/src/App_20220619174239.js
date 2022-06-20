import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=$ari&apikey=263d22d8`;
  };
  return (
    <>
      <div>
        <MovieList/>
      </div>
    </>
  );
};

export default App;
