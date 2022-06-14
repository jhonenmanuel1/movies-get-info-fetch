import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MoviesCard from "./components/moviescard";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const API = "http://www.omdbapi.com/?s=stars&apikey=7088e24d";

    const response = await fetch(API);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search)
  };
  getMovie();

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <MoviesCard movies={movies} />
    </>
  );
}

export default App;
