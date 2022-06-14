import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MoviesCard from "./components/moviescard";

function App() {
  const [movies, setMovies]= useState([{
    "Title": "The Fault in Our Stars",
    "Year": "2014",
    "imdbID": "tt2582846",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
},
{
    "Title": "Like Stars on Earth",
    "Year": "2007",
    "imdbID": "tt0986264",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
},
{
    "Title": "Maps to the Stars",
    "Year": "2014",
    "imdbID": "tt2172584",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjQwNzYyNV5BMl5BanBnXkFtZTgwNTY3NDQ5MzE@._V1_SX300.jpg"
}]);
  useEffect(()=>{

  }, []);

  
  return (
    <>
      <MoviesCard/>
    </>
  );
}

export default App;
