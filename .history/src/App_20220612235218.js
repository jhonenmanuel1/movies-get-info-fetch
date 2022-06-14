import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MoviesCard from "./components/moviescard";
import SearchBox from "./components/searchbox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem]= useState('');

  const getMovie = async () => {
    const API = `http://www.omdbapi.com/?s=gay&apikey=7088e24d`;

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
      <SearchBox  searchItem={searchItem} setSearchItem={setSearchItem}/>

    </div>
    <div>
    <MoviesCard  movies={movies} />

    </div>
      
    </>
  );
}

export default App;
