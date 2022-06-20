import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import'./App.css';
import MovieList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([{
    "Title": "Ari Eldjárn: Pardon My Icelandic",
    "Year": "2020",
    "imdbID": "tt10277516",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWJiMWZjNTQtMGNiZi00YjRkLWIzOWMtOWY2NjRjODIzZjMzXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg"
},
{
    "Title": "The Beat with Ari Melber",
    "Year": "2017–",
    "imdbID": "tt7174218",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODIwYjU0YTItZjQ3My00ZTg5LTk3YWItMGFkMzBiODczYTIzXkEyXkFqcGdeQXVyMzgxMzYzNDg@._V1_SX300.jpg"
},
{
    "Title": "One Punch Man - Wanpanman: Iroiro Ari-sugiru Kyôdai",
    "Year": "2016",
    "imdbID": "tt5594226",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTdkMTVhNWYtNjRkYy00ZTMwLTgwNWEtYWU3ZTNiN2MwOTU3L2ltYWdlXkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_SX300.jpg"
},]);

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=$ari&apikey=263d22d8`;
  };
  return (
    <>
      <div className="container-fluid">
        <div className=" row">
        <MovieList movies={movies}/>

        </div>
        
      </div>
    </>
  );
};

export default App;
