import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MoviesList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavorites";
import RemoveFavourites from "./components/RemoveFavourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovies = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovies(search);
  }, [search]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  const removeFavouriteMovie = (movie) =>{
     const newFavouriteList = favourites.filter((favourite)=>{
        favourite.imdbID !==movie.imdbID
     })

  }

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-2 mb-4">
          <MovieListHeading heading="Movies Jhon" />
          <SearchBox searchValue={search} setSearchValue={setSearch} />
          <div></div>
        </div>
        <div className="list ">
          <MovieList
            movies={movies}
            handlesFavouriteClick={addFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
        </div>
        <div className="row d-flex align-items-center mt-2 mb-4">
          <MovieListHeading heading="Favourites" />
          <div></div>
        </div>
        <div className="list ">
          <MovieList
            movies={favourites}
            handlesFavouriteClick={addFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </>
  );
};

export default App;
