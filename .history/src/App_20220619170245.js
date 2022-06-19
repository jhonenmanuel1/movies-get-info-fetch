import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import MovieHeader from "./components/MovieHeader";
import AddFavourites from "./components/AddFavourites";
import MoviesList from "./components/movielist";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem]= useState('');

  const getMovie = async () => {
    const API = `http://www.omdbapi.com/?s=${searchItem}&apikey=7088e24d`;

    const response = await fetch(API);
    const responseJson = await response.json();
    console.log(searchItem)
    
    if(responseJson.Search){
      setMovies(responseJson.Search)

    }

   
    
  };
  getMovie();

  useEffect(() => {
    getMovie();
    
  }, [searchItem]);

  return (
    <>
    <div>
    <MovieHeader searchItem={searchItem} setSearchItem={setSearchItem}/>

    </div>
    <div className="container-fluid">
    <MoviesList movies={movies} favouritesComponents={AddFavourites}/>

    </div>
      
    </>
  );
}

export default App;
